import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { NgForm } from "@angular/forms";
import { Player } from "../models/Player.model";
import { PlayerService } from "../services/Player.service";

@Component({
  selector: "physique",
  templateUrl: "./physique.component.html",
  styleUrls: ["./physique.component.scss"],
})
export class PhysiqueComponent implements OnInit {
  physiqueQuestions: any[] = [];
  physiqueAnswers: any[] = [];
  currentQuestionIndex: number = 11;
  selectedAnswerId: number | null = null;
  feedbackMessage: string = "";
  correctAnswers: number = 0;
  answerSelected: boolean = false;
  showScoreBox: boolean = false;
  pseudo: string = "";
  pseudoEntered: boolean = false;
  quizStarted: boolean = false;
  playerName: string = ""; // New property for player name
  timeLeft: number = 25; // Initial time for the quiz in seconds
  timer: any;
  rankingMessage: string = "";

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
    this.startTimer();
  }

  addPlayer(addForm: NgForm): void {
    this.quizService.addPlayer(this.pseudo).subscribe(
      (response: any) => {
        console.log(response);
        // Set pseudoEntered to true upon successful submission
        this.pseudoEntered = true;
        // Start the quiz
        this.startQuiz();
      },
      (error) => {
        console.error(error);
        // Handle errors if necessary
      }
    );
  }


  startQuiz(): void {
    this.quizStarted = true;
  }

  getQuestions(): void {
    this.quizService.getQuestions().subscribe((data) => {
      console.log(data);
      this.physiqueQuestions = data;
    });
  }

  getAnswers(): void {
    this.quizService.getAnswers().subscribe((data) => {
      console.log(data);
      this.physiqueAnswers = data;
    });
  }

  getAnswersByQuestionId(questionId: number): any[] {
    return this.physiqueAnswers.filter((answer) => answer.question_id === questionId);
  }

  selectAnswer(answerId: number): void {
    if (!this.answerSelected  && this.timeLeft > 0) {
      this.selectedAnswerId = answerId;
      const selectedAnswer = this.physiqueAnswers.find(answer => answer.id === answerId);
      if (selectedAnswer && selectedAnswer.response_value) {
        this.correctAnswers++;
        this.feedbackMessage = "Vrai !";
      } else {
        this.feedbackMessage = "Faux :( ";
      }
      this.answerSelected = true;
    }
  }

  nextQuestion(): void {
    // Check if it's the last question
    if (this.currentQuestionIndex === 4 || this.physiqueQuestions[this.currentQuestionIndex].id === 15) {
      // Show the score box
      this.showScoreBox = true;
      let rankingMessage = "";
      switch (this.correctAnswers) {
        case 5:
          rankingMessage = "Votre classement est premier";
          break;
        case 4:
          rankingMessage = "Votre classement est deuxième";
          break;
        // Add more cases for other possible scores
        default:
          rankingMessage = "Votre classement est en dehors du top";
          break;
      }
      this.rankingMessage = rankingMessage;
      // Call updateBestScore if the user has answered more than 1 question correctly
      if (this.correctAnswers > 1) {
        this.quizService.updateBestScore(this.pseudo, this.correctAnswers).subscribe(
          (response: any) => {
            console.log(response);
            // Handle response if needed
          },
          (error) => {
            console.error(error);
            // Handle errors if necessary
          }
        );
      }
    } else {
      // Increment the current question index to move to the next question
      this.currentQuestionIndex++;

      // Reset the selected answer and feedback message for the new question
      this.selectedAnswerId = null;
      this.feedbackMessage = "";
      this.answerSelected = false;
    }
  }

  nextButtonText(): string {
    if (this.physiqueQuestions[this.currentQuestionIndex]?.id === 15) {
      return "Afficher mon score";
    } else {
      return "Question suivante";
    }
  }

  closeScoreBox(): void {
    this.showScoreBox = false;
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.closeScoreBox(); // Call function to finish the quiz when time runs out
        clearInterval(this.timer); // Stop the timer when time runs out
      }
    }, 1000); // Timer updates every second (1000 milliseconds)
  }
}

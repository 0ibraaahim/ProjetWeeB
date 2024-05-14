import { Component, OnInit } from "@angular/core"
import { QuizService } from "../services/quiz.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: "histoire",
  templateUrl: "./histoire.component.html",
  styleUrls: ["./histoire.component.scss"],
})
export class HistoireComponent implements OnInit {
  histoireQuestions: any[] = [];
  histoireAnswers: any[] = [];
  currentQuestionIndex: number = 5;
  selectedAnswerId: number | null = null;
  feedbackMessage: string = "";
  correctAnswers: number = 0;
  answerSelected: boolean = false; // Add property to track if an answer is selected
  showScoreBox: boolean = false;
  timeLeft: number = 25; // Initial time for the quiz in seconds
  timer: any;
  pseudo: string = "";
  pseudoEntered: boolean = false;
  quizStarted: boolean = false;
  playerName: string = "";
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
      this.histoireQuestions = data;
    });
  }

  getAnswers(): void {
    this.quizService.getAnswers().subscribe((data) => {
      console.log(data);
      this.histoireAnswers = data;
    });
  }

  getAnswersByQuestionId(questionId: number): any[] {
    return this.histoireAnswers.filter(answer => answer.question_id === questionId);
  }

  selectAnswer(answerId: number): void {
    if (!this.answerSelected && this.timeLeft > 0) { // Check if an answer can be selected
      this.selectedAnswerId = answerId;
      const selectedAnswer = this.histoireAnswers.find(answer => answer.id === answerId);
      if (selectedAnswer && selectedAnswer.response_value) {
        this.correctAnswers++;
        this.feedbackMessage = "Vrai !";
      } else {
        this.feedbackMessage = "Faux :( ";
      }
      this.answerSelected = true; // Mark that an answer has been selected
    }
  }

  nextQuestion(): void {
    // Check if it's the last question
    if (this.currentQuestionIndex === 4 || this.histoireQuestions[this.currentQuestionIndex].id === 10) {
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
    if (this.histoireQuestions[this.currentQuestionIndex]?.id === 10) {
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

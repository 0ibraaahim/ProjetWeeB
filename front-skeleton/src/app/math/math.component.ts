import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { NgForm } from "@angular/forms";
import { Player } from "../models/Player.model";
import { PlayerService } from "../services/Player.service";

@Component({
  selector: "math",
  templateUrl: "./math.component.html",
  styleUrls: ["./math.component.scss"],
})
export class MathComponent implements OnInit {
  mathQuestions: any[] = [];
  mathAnswers: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswerId: number | null = null;
  feedbackMessage: string = "";
  correctAnswers: number = 0;
  answerSelected: boolean = false;
  showScoreBox: boolean = false;
  pseudo: string = "";
  pseudoEntered: boolean = false;
  quizStarted: boolean = false;
  playerName: string = ""; // New property for player name

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
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
      this.mathQuestions = data;
    });
  }

  getAnswers(): void {
    this.quizService.getAnswers().subscribe((data) => {
      console.log(data);
      this.mathAnswers = data;
    });
  }

  getAnswersByQuestionId(questionId: number): any[] {
    return this.mathAnswers.filter((answer) => answer.question_id === questionId);
  }

  selectAnswer(answerId: number): void {
    if (!this.answerSelected) {
      this.selectedAnswerId = answerId;
      const selectedAnswer = this.mathAnswers.find((answer) => answer.id === answerId);
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
    if (this.currentQuestionIndex === 4) { // Stop at the 5th question (index 4)
      // Show the score box
      this.showScoreBox = true;

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
    if (this.mathQuestions[this.currentQuestionIndex]?.id === 5) {
      return "Afficher mon score";
    } else {
      return "Question suivante";
    }
  }

  closeScoreBox(): void {
    this.showScoreBox = false;
  }
}

// math.component.ts

import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

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
  answerSelected: boolean = false; // Add property to track if an answer is selected
  showScoreBox: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
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
    return this.mathAnswers.filter(answer => answer.question_id === questionId);
  }

  selectAnswer(answerId: number): void {
    if (!this.answerSelected) { // Only proceed if an answer has not been selected
      this.selectedAnswerId = answerId;
      const selectedAnswer = this.mathAnswers.find(answer => answer.id === answerId);
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
    if (this.currentQuestionIndex < this.mathQuestions.length - 1) {
      if (this.mathQuestions[this.currentQuestionIndex].id === 5) {

        const totalQuestions = Math.min(this.mathQuestions.length, 5);
        this.showScoreBox = true; // Show the score box
      } else {
        this.selectedAnswerId = null;
        this.feedbackMessage = "";
        this.currentQuestionIndex++;
        this.answerSelected = false; // Reset answer selection for the next question
      }
    } else {
      this.feedbackMessage = `Votre score est : ${this.correctAnswers} sur 5`;

    }
  }
  nextButtonText(): string {
    if (this.mathQuestions[this.currentQuestionIndex]?.id === 5) {
      return "Afficher mon score";
    } else {
      return "Question suivante";
    }
  }

  // Method to close the score box
  closeScoreBox(): void {
    this.showScoreBox = false;
  }
}

// physique.component.ts

import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

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
    return this.physiqueAnswers.filter(answer => answer.question_id === questionId);
  }

  selectAnswer(answerId: number): void {
    if (!this.answerSelected) { // Only proceed if an answer has not been selected
      this.selectedAnswerId = answerId;
      const selectedAnswer = this.physiqueAnswers.find(answer => answer.id === answerId);
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
    if (this.currentQuestionIndex < this.physiqueQuestions.length - 1) {
      this.selectedAnswerId = null;
      this.feedbackMessage = "";
      this.currentQuestionIndex++;
      this.answerSelected = false; // Reset answer selection for the next question
    } else {
      if (this.physiqueQuestions[this.currentQuestionIndex].id === 15) {
        this.showScoreBox = true; // Show the score box

      } else {
        this.showScoreBox = true; // Show the score box
        this.feedbackMessage = `Votre score est : ${this.correctAnswers} sur ${this.physiqueQuestions.length}`;
      }
    }
  }


  nextButtonText(): string {
    if (this.physiqueQuestions[this.currentQuestionIndex]?.id === 5) {
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

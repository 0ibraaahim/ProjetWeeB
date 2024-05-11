import { Component, OnInit } from "@angular/core"
import { QuizService } from "../services/quiz.service";
@Component({
  selector: "histoire",
  templateUrl: "./histoire.component.html",
  styleUrls: ["./histoire.component.scss"],
})
export class HistoireComponent implements OnInit {
  histoireQuestions: any[] = [];
  histoireAnswers: any[] = [];
  currentQuestionIndex: number = 6;
  selectedAnswerId: number | null = null;
  feedbackMessage: string = "";
  correctAnswers: number = 0;
  answerSelected: boolean = false; // Add property to track if an answer is selected

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswers();
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
    if (!this.answerSelected) { // Only proceed if an answer has not been selected
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
    if (this.currentQuestionIndex < this.histoireQuestions.length - 1) {
      if (this.histoireQuestions[this.currentQuestionIndex].id === 10) {
        const totalQuestions = Math.min(this.histoireQuestions.length, 5);
        this.feedbackMessage = `Votre score est : ${this.correctAnswers} sur ${totalQuestions}`;
      } else {
        this.selectedAnswerId = null;
        this.feedbackMessage = "";
        this.currentQuestionIndex++;
        this.answerSelected = false; // Reset answer selection for the next question
      }
    } else {
      this.feedbackMessage = `Votre score est: ${this.correctAnswers} sur 5`;
    }
  }
  nextButtonText(): string {
    if (this.histoireQuestions[this.currentQuestionIndex]?.id === 11) {
      return "Afficher mon score";
    } else {
      return "Question suivante";
    }
  }


}

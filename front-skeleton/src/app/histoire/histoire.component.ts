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
  currentQuestionIndex: number = 5;
  selectedAnswerId: number | null = null;
  feedbackMessage: string = "";
  correctAnswers: number = 0;
  answerSelected: boolean = false; // Add property to track if an answer is selected
  showScoreBox: boolean=false;
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
    if (this.currentQuestionIndex < this.histoireQuestions.length) {
      const currentQuestion = this.histoireQuestions[this.currentQuestionIndex];
      if (currentQuestion.id === 10) {
        this.showScoreBox = true; // Show the score box
      } else {
        this.selectedAnswerId = null;
        this.feedbackMessage = "";
        this.answerSelected = false;
        this.currentQuestionIndex++;
      }
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

}

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
  // Method to handle answer selection
  selectAnswer(answerId: number): void {
    this.selectedAnswerId = answerId;
    const selectedAnswer = this.mathAnswers.find(answer => answer.id === answerId);
    if (selectedAnswer && selectedAnswer.response_value) {
      this.correctAnswers++;
      this.feedbackMessage = "Correct answer!";
    } else {
      this.feedbackMessage = "Wrong answer!";
    }
  }

  // Method to move to the next question
  nextQuestion(): void {
    if (this.currentQuestionIndex < this.mathQuestions.length - 1) {
      // Check if the current question ID is 4
      if (this.mathQuestions[this.currentQuestionIndex].id === 4) {
        // Show the score out of 4 questions
        const totalQuestions = Math.min(this.mathQuestions.length, 4);
        this.feedbackMessage = `Your score: ${this.correctAnswers} out of ${totalQuestions}`;
      } else {
        // Move to the next question
        this.selectedAnswerId = null;
        this.feedbackMessage = "";
        this.currentQuestionIndex++;
      }
    } else {
      // Show the score
      this.feedbackMessage = `Your score: ${this.correctAnswers} out of ${this.mathQuestions.length}`;
    }
  }


}

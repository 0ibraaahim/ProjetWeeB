import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: "app-math",
  templateUrl: "./math.component.html",
  styleUrls: ["./math.component.scss"],
})
export class MathComponent implements OnInit {
  mathQuestions: any[]=[];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.quizService.getQuestions().subscribe((data) => {
      // Filtrer les questions de mathématiques par ID
      this.mathQuestions = data.filter((question: { id: number; }) => question.id >= 1 && question.id <= 5);
    });
  }
}

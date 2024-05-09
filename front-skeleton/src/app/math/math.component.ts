import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: "math",
  templateUrl: "./math.component.html",
  styleUrls: ["./math.component.scss"],
})
export class MathComponent implements OnInit {
  mathQuestions: any[]=[];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getMathQuestions();
  }

  getMathQuestions(): void {
    this.quizService.getMathQuestions().subscribe((data) => {
      this.mathQuestions = data;
    });
  }
}

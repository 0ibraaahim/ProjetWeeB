import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { Quiz } from "../models/quiz.model";
import { Observable } from "rxjs";

@Component({
  selector: "profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
  standalone: true
})
export class ProfilComponent implements OnInit {
  quizzes: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe((quizzes: Quiz[]) => {
      this.quizzes = quizzes;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { QuizService } from "../services/quiz.service";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
  standalone: true
})
export class ProfilComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
  }



  getQuestions(): void {
    this.quizService.getQuestions().subscribe((data) => {
      // Afficher les questions dans la console
      console.log("Questions récupérées :", data);
    });
  }
}

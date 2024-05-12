import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/questions");
  }

  getAnswers(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/answer");
  }

  getAllQuizzes(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/quiz");
  }

  addPlayer(playerName: string, score: number) {
    return this.http.post<any>("http://localhost:8080/players", { pseudo: playerName, best_score: score });
  }
}

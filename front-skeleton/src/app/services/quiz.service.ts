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

  addPlayer(pseudo: string) {
    return this.http.post<any>("http://localhost:8080/players", { pseudo: pseudo, bestScore: 0 });
  }


  updateBestScore(pseudo: string, newBestScore: number): Observable<any> {
    return this.http.put<any>("http://localhost:8080/players", { pseudo:pseudo, bestScore: newBestScore });
  }




  getMeilleursJoueurs(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/players");
  }

}

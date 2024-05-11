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
}

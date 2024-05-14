import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Quiz2} from "../models/Quiz2.model";
import { Question2} from "../models/question2.model";


@Injectable({
  providedIn: "root",
})
export class Quiz2Service {

  private apiUrl = 'http://localhost:8080/quiz2';

  constructor(private http: HttpClient) {}


  getQuizzes(): Observable<Quiz2[]> {
    return this.http.get<Quiz2[]>(this.apiUrl);
  }

  createQuiz(newQuiz: Quiz2): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, newQuiz);
  }
  deleteQuiz(quizId: number) {
    return this.http.delete(`${this.apiUrl}/delete/${quizId}`);
  }
}

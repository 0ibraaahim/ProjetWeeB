import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question2 } from "../models/question2.model"


@Injectable({
  providedIn: "root",
})
export class Questions2Service {

  private apiUrl = 'http://localhost:8080/questions2';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question2[]> {
    return this.http.get<Question2[]>(this.apiUrl);
  }

  createQuestion(newQuestion: Question2): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, newQuestion);
  }

  updateQuestion(question: Question2): Observable<any> {
    const url = `${this.apiUrl}/update/${question.id}`;
    return this.http.put(url, question);
  }

}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question2 } from "../models/question2.model"
import { Answer2 } from "models/answer2.model";


@Injectable({
  providedIn: "root",
})
export class Answer2Service {

  private apiUrl = 'http://localhost:8080/answer';

  constructor(private http: HttpClient) {}


  getAnswers(): Observable<Answer2[]> {
    return this.http.get<Answer2[]>(this.apiUrl);
  }

  createAnswer(newAnswer: Answer2): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, newAnswer);
  }

  updateAnswer(answer: Answer2): Observable<any> {
    const url = `${this.apiUrl}/update/${answer.id}`;
    return this.http.put(url, answer);
  }




}

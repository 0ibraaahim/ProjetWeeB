import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getMathQuestions(): Observable<any> {
    return this.http.get<any>("http:localhost:8080/questions/math");
  }

  // Ajoutez d'autres méthodes pour récupérer les questions des autres thèmes si nécessaire
}
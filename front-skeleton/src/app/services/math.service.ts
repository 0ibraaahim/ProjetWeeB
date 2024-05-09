import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MathService{
  private mathUrl="http://localhost:8080/math";
  constructor(private  http: HttpClient) {
  }
  getmathUrl(): Observable<any> {
    return this.http.get(`${this.mathUrl}`);
  }
}

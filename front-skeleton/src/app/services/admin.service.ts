import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  authenticate(login: string, password: string) {
    return this.http.post<any>('/api/admin', { login, password });
  }
}

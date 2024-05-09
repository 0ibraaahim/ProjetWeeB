import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'services/admin.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  login   = ''
  password = ''
  invalidLogin = false
  loginMessage = '';

  constructor(private router: Router,
              private adminService: AdminService,
              private  http:HttpClient) { }

  ngOnInit() {
  }

  checkLogin() {
    this.http.post<any>('http://localhost:8080/admin/login', { login: this.login, password: this.password })
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          // Authentification réussie, rediriger l'utilisateur
          this.loginMessage = 'Correct password.';
          this.router.navigate(["/math"]);
          this.invalidLogin = false;
        } else {
          // Authentification échouée
          this.loginMessage = 'Wrong username or password.';
          this.invalidLogin = true;
        }
      });
  }


}

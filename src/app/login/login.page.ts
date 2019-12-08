import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  googleLogin() : void{ 
    console.log("google icon clicked");
    this.authService.googleLogin();
  }
}

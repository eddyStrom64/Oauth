import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthModel } from 'src/app/models/Oauth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(forma: NgForm) {
    const {userName, password } = forma.value;

    this.authService.postLogin(userName, password)
    .then(async(resp) => {
      try {
        const authData: OauthModel = await this.authService.getOauth();
        window.location.href = authData.UriRedirect;
      } catch (err) {
       console.log(err);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.prod';
import { lastValueFrom } from 'rxjs';
import { OauthModel } from '../models/Oauth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  BaseUrl = environment.baseUrl;

  postLogin(userName: string, password: string)  {
    return lastValueFrom(this.http.post(`${this.BaseUrl}/AsaAdmin/User/Login`,{userName, password}));
  }

  getOauth(): Promise<OauthModel>{
    return lastValueFrom<OauthModel>(this.http.get<OauthModel>(`${this.BaseUrl}/V1/AsaAdmin/Site/Oauth`));
  }

}

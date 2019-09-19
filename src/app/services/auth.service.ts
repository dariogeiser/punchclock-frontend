import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  
  register(username: String, password: String){
  this.http.post<any>('localhost:8081/users/signup' , {
      username: username,
      password: password
    })
  }

  login(username: String, password: String){
    return this.http.post<any>('localhost:8081/login' , {
      username: username,
      password: password
    }).subscribe(resp => {
      const accessToken = resp.headers.get("Access-Token")
      localStorage.setItem("access-token", accessToken)
    })
  }


}

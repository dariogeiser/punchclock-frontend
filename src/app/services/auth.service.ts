import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public reqHeader: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) { 
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  
  register(username: String, password: String){
 
  return this.http.post<any>('http://localhost:8081/users/sign-up' , {
      username: username,
      password: password
    }, { headers: this.reqHeader }).subscribe(resp =>{
    
    });
  }

  login(username: String, password: String){
    return this.http.post<any>('http://localhost:8081/login' , {
      username: username,
      password: password
    }, { observe: 'response'}).subscribe(resp => {
      const accessToken = resp.headers.get('Authorization')
      localStorage.setItem('access-token', accessToken);
      this.router.navigate(['home'])
    })
  }

  logout(){
    localStorage.removeItem('access-token');
    this.router.navigate(['login-page'])
  }


}

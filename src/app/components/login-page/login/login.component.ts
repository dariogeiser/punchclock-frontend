import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = null;
  password:string = null;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
   
    if(this.username && this.password){
      this.authService.login(this.username, this.password);
    }
  }

}

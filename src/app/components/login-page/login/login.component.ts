import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = null;
  password:string = null;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
   
    if(this.username && this.password){
      console.log("sad")
      this.authService.login(this.username, this.password);
    }
  }

}

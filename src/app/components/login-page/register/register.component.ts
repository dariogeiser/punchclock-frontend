import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string = null;
  password:string = null;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
   
    if(this.username && this.password){
      console.log("sad")
      this.authService.register(this.username, this.password);
    }
  }

}

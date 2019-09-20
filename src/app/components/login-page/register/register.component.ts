import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string = null;
  password:string = null;

  @ViewChild('myForm', {static: false}) myForm: NgForm;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
   
    if(this.username && this.password){
      console.log(this.username)
      this.authService.register(this.username, this.password);
      this.myForm.resetForm();
    }
  }

}

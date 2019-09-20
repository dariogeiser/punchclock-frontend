import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { EntryService } from 'src/app/services/entry.service';



@Component({
  selector: 'app-time-manager',
  templateUrl: './time-manager.component.html',
  styleUrls: ['./time-manager.component.css']
})
export class TimeManagerComponent implements OnInit {

  currentId: String = ''; 

  checkin: Date = null;
  reqCheckin: String = ''
  checkout: Date = null;
  reqCheckout: String = ''

  entryList: {
    'id': String
    'checkIn': String,
    'checkOut': String,
  }[] = [];
  

  constructor(private authService: AuthService, private router: Router, private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getEntries().subscribe(resp =>{
      this.entryList = [];
      resp.forEach(entry => {
        this.entryList.push({
          "id": entry.id,
          "checkIn": entry.checkIn,
          "checkOut": entry.checkOut
        })
      })
    })
  }

  logout(){
    this.authService.logout();
  }

  checkIn(){
    let date = new Date()
    this.checkin = date;
    this.reqCheckin = date.toISOString();
  }

  checkOut(){
    let date = new Date()
    this.checkout = date;
    this.reqCheckout = date.toISOString();
  }

  createEntry(){
    this.entryService.createEntry(this.reqCheckin, this.reqCheckout).subscribe(resp =>{
      this.entryService.getEntries().subscribe(resp =>{
        this.entryList = [];
        resp.forEach(entry => {
          this.entryList.push({
            "id": entry.id,
            "checkIn": entry.checkIn,
            "checkOut": entry.checkOut
          })
        })
      })
      this.reqCheckin = '';
      this.reqCheckout = '';
      this.checkIn = null;
      this.checkOut = null;
    });

    }
    updateEntry(){
      this.entryService.updateEntry(this.currentId, this.reqCheckin, this.reqCheckout).subscribe(resp =>{
        this.entryService.getEntries().subscribe(resp =>{
          this.entryList = [];
          resp.forEach(entry => {
            this.entryList.push({
              "id": entry.id,
              "checkIn": entry.checkIn,
              "checkOut": entry.checkOut
            })
          })
        })
      });


     
  }

  deleteEntry(id: string, checkIn: String, checkOut: String){
    this.entryService.deleteEntry(id).subscribe(resp =>{
      this.entryService.getEntries().subscribe(resp =>{
        this.entryList = [];
        resp.forEach(entry => {
          this.entryList.push({
            "id": entry.id,
            "checkIn": entry.checkIn,
            "checkOut": entry.checkOut
          })
        })
      })
    });
}
  

setCurrentId(id: String){
  
  this.currentId = id;  
}




}

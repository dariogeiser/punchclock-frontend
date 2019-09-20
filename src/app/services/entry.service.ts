import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class EntryService {

  public reqHeader: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access-token')
    });
  }

  createEntry(checkIn: String, checkout: String){
    return this.http.post<any>('http://localhost:8081/entries', {
      checkIn: checkIn,
      checkOut: checkout,
      creator: {
        id: 1
      }}, {headers: this.reqHeader})
  }

  updateEntry(id: String, checkIn: String, checkout: String){
    return this.http.put(`http://localhost:8081/entries/${id}`, {
      checkIn: checkIn,
      checkOut: checkout,
      creator: {
        id: 1
      }}, {headers: this.reqHeader})
  }

  deleteEntry(id: String){
    return this.http.delete(`http://localhost:8081/entries/${id}`, {headers: this.reqHeader})
  }

  getEntries(){
    return this.http.get<any>('http://localhost:8081/entries',{headers: this.reqHeader})
  }



}

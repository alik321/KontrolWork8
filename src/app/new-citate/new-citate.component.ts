import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-citate',
  templateUrl: './new-citate.component.html',
  styleUrls: ['./new-citate.component.css']
})
export class NewCitateComponent implements OnInit {

  author = '';
  text = '';
  citate = '';

  constructor(private http: HttpClient) { }



  sendCitate(){
    const citate = this.citate;
    const text = this.text;
    const author = this.author;

    const citates = {author,citate,text}
    this.http.post('https://citates-1307b-default-rtdb.firebaseio.com/citates.json',citates).subscribe();

  }

  ngOnInit(): void {
  }

}

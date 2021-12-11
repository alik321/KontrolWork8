import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Citate } from '../shared/citate.module';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  citates: Citate[] = [];

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.http.get<{[id: string]: Citate}>('https://citates-1307b-default-rtdb.firebaseio.com/citates.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const citateData = result[id];
          const citate = new Citate(
            citateData.id,
            citateData.citate,
            citateData.author,
            citateData.text,
          );
          return citate;
        });
      }))
      .subscribe(citates => {
        this.citates = citates;
      });
  }
}

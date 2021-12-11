import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Citate } from '../shared/citate.module';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  citates: Citate[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(){
    const dishId = parseInt(this.route.snapshot.params['id']);
    console.log(dishId);

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

  toDelete(i: number){
    this.citates.splice(i, 1);
  };
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challange';
  allDatas: any[] = [];
  headers: any[] = [];

  async ngOnInit() {
    const response = await fetch('./assets/Artikel.csv');
    const data = await response.text();
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(';');
        this.allDatas.push(row);
        console.log(row);
      })
      this.headers.push(this.allDatas[0]);
      this.allDatas.shift()
  }


}

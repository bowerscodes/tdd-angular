import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent {

  homes$!: Observable<{ title: string; image: string; location: string; }[]>;

  ngOnInit() {
    // this.homes$ = this.dataService.getHomes$
    this.homes$ = of([
      { 
        title: 'Home 1',
        image: 'assets/mylisting.jpg',
        location: 'New York'
      },
      { 
        title: 'Home 1',
        image: 'assets/mylisting.jpg',
        location: 'Boston'
      },
      { 
        title: 'Home 1',
        image: 'assets/mylisting.jpg',
        location: 'Chicago'
      },
    ])
  }

}

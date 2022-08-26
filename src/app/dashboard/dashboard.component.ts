import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
     heroes:Hero[]=[];
  constructor(public heroservice:HeroService) { }

  ngOnInit(): void {
    this.getheroes();
  }
   getheroes(){
    this.heroservice.gethero().subscribe(hero=>this.heroes=hero.slice(1,5));
   }
}

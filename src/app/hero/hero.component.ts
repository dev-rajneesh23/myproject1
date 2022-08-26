import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../service/hero.service';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heros:Hero[]=[]
  heroes = HEROES;
  selectedhero?:Hero;
  //  hero:Hero = {
  //   id:1,
  //   name:'krishwillsion'
  //  };
  constructor(private service:HeroService, private msgservice:MessagesService) { }

  ngOnInit(): void {
    this.getheroes();
  }
  onselect(hero:Hero): void {
  this.selectedhero = hero;
  this.msgservice.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
   getheroes():void {
    this.service.gethero().subscribe(hero=>this.heros = hero)
   }
  
}

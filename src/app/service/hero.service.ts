import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero/hero';
import { HEROES } from '../hero/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  getheroes():Observable<Hero[]>{
    const heroes = of(HEROES)

    return heroes 
  }
}

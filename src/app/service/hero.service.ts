import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero/hero';
import { HEROES } from '../hero/mock-heroes';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgservice:MessagesService,private http:HttpClient ) { }


  gethero(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.msgservice.add('Heroservice:fatched heroes')

    return heroes;
  }
  gethero1(id:number): Observable<Hero>{
    const heroes = HEROES.find(h=>h.id === id)!;
    this.msgservice.add('Heroservice:fatched heroes')

    return of(heroes); 
  }

  private log(message:string){
   this.msgservice.add(`heroservice: ${message}`);
  }
}

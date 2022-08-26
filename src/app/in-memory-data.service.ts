import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 12, name: 'ram' },
      { id: 13, name: 'hari' },
      { id: 14, name: 'krishna' },
      { id: 15, name: 'mohit' },
      { id: 16, name: 'rohit' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Denim' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'sanju' }
    ];
    return {heroes};
  }

  getid(heroes:Hero[]):number{
        return heroes.length > 0 ? Math.max(...heroes.map(hero=>hero.id)) +1:11;
  }
  
}

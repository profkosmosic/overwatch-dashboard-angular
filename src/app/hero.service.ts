import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Hero[]> {
    const heroArr = of(heroes);
    return heroArr;
  }

  getHero(key: string):Observable<Hero> {
    const hero = heroes.find(h => h.key === key)!;
    return of(hero);
  }
}

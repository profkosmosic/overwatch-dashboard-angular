import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-tab',
  templateUrl: './hero-tab.component.html',
  styleUrls: ['./hero-tab.component.css']
})
export class HeroTabComponent implements OnInit {

  heroList:Hero[] = [];
  selectedHero?:Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero:Hero):void {
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroList = this.heroService.getHeroes();
  }

}

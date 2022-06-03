import { Component, OnInit } from '@angular/core';
import heroes from 'src/assets/overwatch.json'
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-tab',
  templateUrl: './hero-tab.component.html',
  styleUrls: ['./hero-tab.component.css']
})
export class HeroTabComponent implements OnInit {

  public heroList:Hero[] = heroes;

  constructor() { }

  ngOnInit(): void {
  }

}

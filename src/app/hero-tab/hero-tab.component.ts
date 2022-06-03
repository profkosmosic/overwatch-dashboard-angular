import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroes } from '../heroes';

@Component({
  selector: 'app-hero-tab',
  templateUrl: './hero-tab.component.html',
  styleUrls: ['./hero-tab.component.css']
})
export class HeroTabComponent implements OnInit {

  public heroList = heroes;

  constructor() { }

  ngOnInit(): void {
  }

}

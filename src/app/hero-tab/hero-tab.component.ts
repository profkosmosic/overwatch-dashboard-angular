import { Component, OnInit } from '@angular/core';
import heroes from 'src/assets/overwatch.json'

@Component({
  selector: 'app-hero-tab',
  templateUrl: './hero-tab.component.html',
  styleUrls: ['./hero-tab.component.css']
})
export class HeroTabComponent implements OnInit {

  public heroList:{id:number, key:string, name:string, role:string, health:number, portrait:string}[] = heroes;

  constructor() { }

  ngOnInit(): void {
  }

}

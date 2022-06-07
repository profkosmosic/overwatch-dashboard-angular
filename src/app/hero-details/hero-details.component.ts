import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?:Hero;
  roleArr:string[] = ["tank", "damage", "support"];

  constructor(private route:ActivatedRoute, private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const key = String(this.route.snapshot.paramMap.get("key"));
    this.heroService.getHero(key)
      .subscribe(hero => this.hero = hero);
  }
}

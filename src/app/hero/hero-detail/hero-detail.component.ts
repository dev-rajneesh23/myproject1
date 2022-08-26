import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 @Input() hero?:Hero
  constructor(private service:HeroService) { }

  ngOnInit(): void {
  }

}
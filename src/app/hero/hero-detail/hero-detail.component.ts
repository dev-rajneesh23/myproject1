import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from 'src/app/service/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 hero:Hero|undefined ;
  constructor(private service:HeroService, private location:Location, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gethero();
  }
  gethero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.gethero1(id).subscribe(hero=>this.hero=hero);
  }

  goback(){
       this.location.back();
  }

}

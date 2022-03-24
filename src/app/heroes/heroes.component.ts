import { Component, OnInit } from '@angular/core';
import { Heroes } from './interface/heroes';
import { heroes as HeroList } from './heroes-mock';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Heroes = { id : 1, name: 'Mauricio Colmenero', earns: 17}
  heroes: Heroes[] = HeroList;
  selectedHeroes: Heroes| undefined;

  onSelectHero(hero:Heroes): void {this.selectedHeroes = hero;}
  
  ngOnInit(): void {
  }

}

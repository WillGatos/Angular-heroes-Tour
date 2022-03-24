import { Component, OnInit, Input} from '@angular/core';
import { Heroes } from '../heroes/interface/heroes';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Heroes | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

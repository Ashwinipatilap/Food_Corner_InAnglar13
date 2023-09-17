import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { StarRatingComponent } from 'ng-starrating/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods :Food[]=[];

  constructor(private _fs:FoodService) { }

  ngOnInit(): void {
    this.foods = this._fs.getAll();
  }

}

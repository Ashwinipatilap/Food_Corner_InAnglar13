import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { StarRatingComponent } from 'ng-starrating/public-api';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods :Food[]=[];

  constructor(private _fs:FoodService,
               private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this._router.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods =this._fs.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
    else if(params['tag']){
      this.foods = this._fs.getAllFoodsByTag(params['tag'])

    }
    else
    this.foods = this._fs.getAll();
    })
    
  }

}

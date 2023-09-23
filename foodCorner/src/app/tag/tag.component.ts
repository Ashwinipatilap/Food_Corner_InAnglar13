import { Component, OnInit } from '@angular/core';
import { tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags:tag[]=[];
  constructor(private _service:FoodService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.tags = this._service.getAllTag();
  }

}

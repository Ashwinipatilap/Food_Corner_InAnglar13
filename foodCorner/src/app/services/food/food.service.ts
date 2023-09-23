import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import {tag} from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodsByTag(tag:string):Food[]{
    
      if(tag=="All")
      return this.getAll();
    else
    return this.getAll().filter(food=>food.tags?.includes(tag));

      
   

  }

  getAll():Food[]{
    return [
    {
      id:1,
      name:'Pizza Pepperoni',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['italy'],
      stars:4.5,
      imageUrl: '/assets/pizz1.avif',
      tags:['FastFood','Pizza','Lunch']
    },
    {
      id:2,
      name:'Vegitable Pizza',
      cookTime:'40-50',
      price:9,
      favorite:false,
      origins:['italy'],
      stars:4.0,
      imageUrl: '/assets/pizza2.jpg',
      tags:['FastFood','Pizza','Lunch']
    },{
      id:3,
      name:'Paneer Pizza',
      cookTime:'40-50',
      price:9,
      favorite:false,
      origins:['italy'],
      stars:4.2,
      imageUrl: '/assets/pizza2.jpg',
      tags:['FastFood','Pizza','Lunch']
    },
    {
      id:4,
      name:'French Fries',
      cookTime:'15-20',
      price:8,
      favorite:true,
      origins:['Belgium','France'],
      stars:4.5,
      imageUrl: '/assets/frenchfries1.jpg',
      tags:['FastFood','Fry']
    },{
      id:5,
      name:'Meatball',
      cookTime:'20-30',
      price:20,
      favorite:true,
      origins:['Persia','Middle-east'],
      stars:4.7,
      imageUrl: '/assets/chickenbolls.jpg',
      tags:['SlowFood','Lunch']
    },
    {
      id:6,
      name:'Burger',
      cookTime:'20-30',
      price:15,
      favorite:false,
      origins:['USA','Middle-east'],
      stars:3,
      imageUrl: '/assets/burger.jpg',
      tags:['FastFood','Burger']
    },
    {
      id:7,
      name:'Samosa',
      cookTime:'20-30',
      price:10,
      favorite:false,
      origins:['Indian'],
      stars:4.7,
      imageUrl: '/assets/samosa.jpg',
      tags:['FastFood']
    }
    ];
  }


  getAllTag():tag[]{
    return [
      {
      name:'All',count:7
    },
    {
      name:'FastFood',count:6
    },
    {
      name:'Lunch',count:4
    },
    {
      name:'Pizza',count:3
    },
    {
      name:'Burger',count:1
    },
    {
      name:'Fry',count:1
    }
    ,
    {
      name:'SlowFood',count:1
    }
  
  ]

  }
}

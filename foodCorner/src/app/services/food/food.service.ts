import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return [
      '/assets/burgur.avif',
      '/assets/chickenbolls.jpg',
      '/assets/frenchfries.jpg',
      '/assets/pizz1.avif',
      '/assets/pizza2.jpg',
      'assets/pizza3.jpg'
    ]
  }
}

import { Injectable } from '@angular/core';
import { Invention } from './inventions.class';

@Injectable()
export class InventionsService {

  rawInventions: Invention[] = [
    {
      name: 'Java',
      inventor: 'James Ghosling',
      year: '1995'
    },
    {
      name: 'Python',
      inventor: 'Guido van Rosum',
      year: '1991'
    },
    {
      name: 'C++',
      inventor: 'Bjarne Stroustrup',
      year: '1983'
    }
  ]

  constructor() { }

  getInventions(): Invention[] {
    return this.rawInventions;
  }

}

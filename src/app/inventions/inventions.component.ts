import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { Invention } from './inventions.class';

import { InventionsService } from './inventions.service'; 

@Component({
    selector: 'app-invention',
    templateUrl: './inventions.component.html',
    styleUrls: ['./inventions.component.css'],
    providers: [ InventionsService]
})

export class InventionsComponent implements OnInit {
    nameModel: String;
    inventorModel: String;
    yearModel: String;
    inventions: Invention[];

    constructor( private inventionService: InventionsService ) {
        this.nameModel = '';
        this.inventorModel = '';
        this.yearModel = '';
        this.inventions = inventionService.getInventions();
    }

    ngOnInit() {
    }

    createInvention() {

        let newInvention: Invention = {
            name: this.nameModel,
            inventor: this.inventorModel,
            year: this.yearModel
        };

        this.inventions.push(newInvention);
        this.nameModel = this.yearModel = this.inventorModel = '';
    }

}

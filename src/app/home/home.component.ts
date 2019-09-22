import { PizzaService } from './../pizza.service';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterTerm;
  pizza:any = [];

  constructor(
    private pizzaService: PizzaService
  ) { 
      this.getPizzas()
  }

  ngOnInit() {
  }

  getPizzas() {

    this.pizzaService.getAllPizzas().subscribe( data =>  {
      this.pizza = data
    });
  }

  setItem = (x) => {
    this.filterTerm = x
  }

}

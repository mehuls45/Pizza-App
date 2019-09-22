import { PizzaService } from './../pizza.service';
import { FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  pizzaForm = new FormGroup({

    name: new FormControl("", Validators.required),
    img: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    toppings: new FormControl("", Validators.required)

  });

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.pizzaForm.value)
    this.pizzaService.addPizza(this.pizzaForm.value)
  }

  clear() {
    this.pizzaForm.reset();
  }

}

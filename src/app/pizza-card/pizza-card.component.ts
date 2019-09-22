import { CartService } from './../cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  obj;
  @Input() name;
  @Input() img;
  @Input() id;
  @Input() toppings;
  @Input() price;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  sendToCart(name,price) {
    this.obj = {
      "name": name,
      "price": price
    }

    this.cartService.addToCart(this.obj)
  }

}

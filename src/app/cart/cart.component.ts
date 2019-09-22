import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any = [];

  constructor(
    private cartService :CartService
  ) { 
    this.getAllItems()
  }

  ngOnInit() {
  }

  getAllItems() {
    this.cartService.getAll().subscribe( data => {
      this.cartItems = data;
      console.log(this.cartItems)
    });
  }

  deleteItem(id) {
    console.log(id)
    this.cartService.deleteFromCart({ "id": id })
  }

}

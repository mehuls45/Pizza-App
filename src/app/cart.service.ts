import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.url);
  }

  addToCart(item) {
    this.http.post(this.url+"/cart",item).subscribe( success => {
      console.log("added")
    });
  }

  deleteFromCart(id) {
    /* this.http.post(this.url+"/deleteItem",id).subscribe( success => {
      console.log("deleted")
    }); */
  }
}

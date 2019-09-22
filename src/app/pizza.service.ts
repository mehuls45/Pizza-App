import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getAllPizzas() {
    return this.http.get("http://localhost:8080/pizza")
  }

  addPizza(pizza) {
    this.http.post("http://localhost:8080/pizza", pizza).subscribe( success => {
      console.log("Added successfully")
    });
  }
  
}

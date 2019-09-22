package com.example.pizzademo.resource;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizzademo.model.Pizza;
import com.example.pizzademo.repository.PizzaRepository;

@CrossOrigin
@RestController
public class PizzaController {
	
	@Autowired
	PizzaRepository pizzaRepository;
	
	@GetMapping("/pizza")
	public List<Pizza> getPizzas() {
		return pizzaRepository.findAll();
	}
	
	@PostMapping("/pizza")
	public void addPizza(@RequestBody Map<String,String> body) {
		String name = body.get("name");
		String img = body.get("img");
		Integer price = Integer.parseInt(body.get("price"));
		String toppings = body.get("toppings");
		pizzaRepository.save(new Pizza(name,img,price,toppings));
	}

}

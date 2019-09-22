package com.example.pizzademo.resource;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizzademo.model.Cart;
import com.example.pizzademo.repository.CartRepository;

@CrossOrigin
@RestController
public class CartController {
	
	@Autowired
	CartRepository cartRepository;
	
	@GetMapping("/cart")
	public List<Cart> getCart() {
		return cartRepository.findAll();
	}
	
	@PostMapping("/cart")
	public void addToCart(@RequestBody Map<String,String> body) {
		String name = body.get("name");
		Integer price = Integer.parseInt(body.get("price"));
		cartRepository.save(new Cart(name,price));
	}
	
//	@PostMapping("/deleteItem")
//	public boolean deleteItem(@RequestBody Map<String,Integer> body) {
//		int id = body.get("id");
//		System.out.println(id);
//		/*cartRepository.delete(id); */
//		return true;
//	}

}

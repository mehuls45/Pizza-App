package com.example.pizzademo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pizza {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String name;
	private String img;
	private Integer price;
	private String toppings;
	
	public Pizza() {}
	
	public Pizza(String name, String img, Integer price, String toppings) {
		super();
		this.name = name;
		this.img = img;
		this.price = price;
		this.toppings = toppings;
	}

	public Pizza(Integer id, String name, String img, Integer price, String toppings) {
		super();
		this.id = id;
		this.name = name;
		this.img = img;
		this.price = price;
		this.toppings = toppings;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getToppings() {
		return toppings;
	}

	public void setToppings(String toppings) {
		this.toppings = toppings;
	}

	@Override
	public String toString() {
		return "Pizza [id=" + id + ", name=" + name + ", img=" + img + ", price=" + price + ", toppings=" + toppings
				+ "]";
	}
	
	

}

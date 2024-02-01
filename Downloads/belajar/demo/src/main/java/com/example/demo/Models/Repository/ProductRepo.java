package com.example.demo.Models.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Models.entities.Products;

public interface ProductRepo extends CrudRepository<Products, Long> {
    
}
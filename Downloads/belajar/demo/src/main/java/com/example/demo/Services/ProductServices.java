package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Models.Repository.ProductRepo;
import com.example.demo.Models.entities.Products;
import java.util.stream.StreamSupport;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductServices {

    @Autowired
    private ProductRepo productRepo;

    public Products create(Products prod) {
        return productRepo.save(prod);
    }

    public Iterable<Products> findData() {
        return productRepo.findAll();
    }

    public Iterable<Products> findProductsByName(String Name) {
        Iterable<Products> AllProducts = productRepo.findAll();
        Iterable<Products> Products = StreamSupport.stream(AllProducts.spliterator(), false)
                .filter(entity -> entity.getName().equals(Name)) // Adjust the condition based on your needs
                .collect(Collectors.toList());

        return Products;
    }

}

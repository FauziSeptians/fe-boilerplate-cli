package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.entities.Products;
import com.example.demo.Models.entities.Responses;
import com.example.demo.Services.ProductServices;

import ch.qos.logback.core.spi.ErrorCodes;

import java.util.stream.StreamSupport;
import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WebControllers {

    @Autowired
    private ProductServices productservices;
    private Responses res;

    @GetMapping("/showdata")
    public Responses showData() {

        try {
            Iterable<Products> prod = productservices.findData();
            Responses res = new Responses(200, "Succes Ambil Data", prod);
            return res;
        } catch (Exception e) {
            // TODO: handle exception
            Iterable<Products> prod = productservices.findData();
            Responses res = new Responses(200, e.getMessage(), null);
            return res;
        }
    }

    @PostMapping("/getdata")
    public Responses setProducts(@RequestBody Products products) {

        try {
            Responses res = new Responses(200, "Sucess Update data", null);
            return res;
        } catch (Exception e) {
            // TODO: handle exception
            Responses res = new Responses(200, e.getMessage(), null);
            return res;
        }

    }

    @PostMapping("/getdatabyname")
    public Responses byName(@RequestBody String name) {
        try {
            Iterable<Products> searchProducts = productservices.findProductsByName(name);

            List<Products> productList = StreamSupport.stream(searchProducts.spliterator(), false)
                    .collect(Collectors.toList());

            // if (productList.isEmpty()) {
            //     throw new IllegalArgumentException("Data Kosong");
            // } else {
                Responses res = new Responses(200, "Success Update data", productList);
                return res;
            // }

        } catch (Exception e) {
            if (e.getMessage().contains("Data Kosong")) {
                Responses res = new Responses(404, e.getMessage(), null);
                return res;
            } else {
                Responses res = new Responses(500, e.getMessage(), null);
                return res;
            }
        }
    }

}

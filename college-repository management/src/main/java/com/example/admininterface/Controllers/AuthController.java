package com.example.admininterface.controller;

import com.example.admininterface.model.User;
import com.example.admininterface.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.authenticate(user.getUsername(), user.getPassword());
    }
}

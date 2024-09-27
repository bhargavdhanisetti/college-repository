package com.example.admininterface.controller;

import com.example.admininterface.model.User;
import com.example.admininterface.security.JwtUtil;
import com.example.admininterface.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User authenticatedUser = userService.authenticate(user.getUsername(), user.getPassword());
        if (authenticatedUser != null) {
            return jwtUtil.generateToken(authenticatedUser.getUsername());
        }
        throw new RuntimeException("Invalid credentials");
    }
}

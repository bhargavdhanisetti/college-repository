package com.example.admininterface.controller;

import com.example.admininterface.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/dashboard")
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/enrollment-trends")
    public Object getEnrollmentTrends() {
        return dashboardService.getEnrollmentTrends();
    }

    @GetMapping("/faculty-loads")
    public Object getFacultyCourseLoads() {
        return dashboardService.getFacultyCourseLoads();
    }
}

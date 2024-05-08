package com.takima.backskeleton.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.takima.backskeleton.models.Admin;
import com.takima.backskeleton.services.AdminService;

@CrossOrigin
@RequestMapping("admin")
@RestController
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/login")
    public boolean adminLogin(@RequestBody Admin admin) {
        return adminService.authenticate(admin.getLogin(), admin.getPassword());
    }
}

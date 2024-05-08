package com.takima.backskeleton.services;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.takima.backskeleton.models.Admin;
import com.takima.backskeleton.DAO.AdminDao;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminDao adminDao;

    public boolean authenticate(String login, String password) {
        Admin admin = adminDao.findByLogin(login);
        if (admin != null) {
            return admin.getPassword().equals(password);
        }
        return false;
    }
}

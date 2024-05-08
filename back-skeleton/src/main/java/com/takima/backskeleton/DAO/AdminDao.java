package com.takima.backskeleton.DAO;
import com.takima.backskeleton.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminDao extends JpaRepository<Admin, Long> {
    Admin findByLogin(String login);

}
package com.takima.backskeleton.DAO;
import com.takima.backskeleton.models.Quiz_question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Quiz_questionDao extends JpaRepository<Quiz_question, Long> {

}
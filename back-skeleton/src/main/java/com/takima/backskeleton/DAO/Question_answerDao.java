package com.takima.backskeleton.DAO;
import com.takima.backskeleton.models.Question_answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Question_answerDao extends JpaRepository<Question_answer, Long> {

}
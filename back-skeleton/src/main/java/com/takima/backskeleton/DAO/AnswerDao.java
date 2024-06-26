package com.takima.backskeleton.DAO;
import com.takima.backskeleton.models.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerDao extends JpaRepository<Answer, Long> {

}
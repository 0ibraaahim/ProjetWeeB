package com.takima.backskeleton.DAO;
import com.takima.backskeleton.models.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionsDao extends JpaRepository<Questions, Long> {

}
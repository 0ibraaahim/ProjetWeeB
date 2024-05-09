package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "quiz_question")
@Getter
public class Quiz_question {
    @Id
    @Column(name = "quiz_id")
    private String quiz_id;

    @Id
    @Column(name = "question_id")
    private String question_id;

}
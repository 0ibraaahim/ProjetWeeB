package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "question_answer")
@Getter
public class Question_answer {
    @Id
    @Column(name = "question_id")
    private int question_id;

    @Id
    @Column(name = "answer_id")
    private int answer_id;



    private Question_answer(Builder builder) {
        this.question_id=builder.question_id;
        this.answer_id=builder.answer_id;
    }

    public Question_answer() {
    }

    public static class Builder {

        private int question_id;
        private int answer_id;



        public Builder question_id(int question_id){
            this.question_id=question_id;
            return this;
        }
        public Builder answer_id(int answer_id){
            this.answer_id=answer_id;
            return this;
        }
        public Question_answer build() {
            return new Question_answer(this);
        }
    }
}

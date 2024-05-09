package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "answer")
@Getter
public class Answer {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "question_id")
    private int question_id;

    @Column(name = "reponse_value")
    private boolean response_value;

    private Answer(Builder builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.question_id=builder.question_id;
        this.response_value=builder.response_value;
    }

    public Answer() {
    }

    public static class Builder {
        private int id;
        private String name;
        private int question_id;
        private boolean response_value;


        public Builder id (int id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }
        public Builder question_id(int question_id){
            this.question_id=question_id;
            return this;
        }
        public Builder response_value(boolean response_value){
            this.response_value=response_value;
            return this;
        }
        public Answer build() {
            return new Answer(this);
        }
    }
}

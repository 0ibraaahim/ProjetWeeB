package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "questions")
@Getter
public class Questions {
    @Id
    @Column(name = "id")
    private int id;


    @Column(name = "question")
    private String question;



    private Questions(Builder builder) {
        this.id=builder.id;
        this.question=builder.question;
    }

    public Questions() {
    }

    public static class Builder {

        private int id;
        private String question;



        public Builder id(int id){
            this.id=id;
            return this;
        }
        public Builder question(String question){
            this.question=question;
            return this;
        }
        public Questions build() {
            return new Questions(this);
        }
    }
}

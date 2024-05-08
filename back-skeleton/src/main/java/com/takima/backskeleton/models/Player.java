package com.takima.backskeleton.models;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "player")
@Getter
public class Player {
    @Id
    @Column(name = "pseudo")
    private String pseudo;

    @Column(name = "best_score")
    private int bestScore;


    private Player(Builder builder) {
        this.pseudo = builder.pseudo;
        this.bestScore = builder.bestScore;
    }

    public Player() {
    }

    public static class Builder {
        private String pseudo;
        private int bestScore;


        public Builder pseudo (String pseudo) {
            this.pseudo = pseudo;
            return this;
        }

        public Builder bestScore(int bestScore) {
            this.bestScore = bestScore;
            return this;
        }
        public Player build() {
            return new Player(this);
        }
    }
}

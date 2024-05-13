package com.takima.backskeleton.models;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "player")
@Getter
@Setter
public class Player {
    @Id
    @Column(name = "pseudo")
    public String pseudo;

    @Column(name = "best_score")
    public int bestScore;

    // Constructor, getters, setters
}

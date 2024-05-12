package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "quiz")
@Getter
public class Quiz {
    @Id
    @Column(name = "id")
    private String id;

}
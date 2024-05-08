package com.takima.backskeleton.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "admin")
@Getter
public class Admin {
    @Id
    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    protected Admin() {} // Constructeur par défaut requis par JPA

    private Admin(Builder builder) {
        this.login = builder.login;
        this.password = builder.password;
    }

    public static class Builder {
        private String login;
        private String password;

        public Builder login(String login) {
            this.login = login;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Admin build() {
            return new Admin(this);
        }
    }
}

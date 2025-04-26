package com.learnora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class LearnOraApplication {
    public static void main(String[] args) {
        SpringApplication.run(LearnOraApplication.class, args);
    }
} 
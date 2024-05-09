package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Quiz;
import com.takima.backskeleton.services.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("quiz")
@RestController
@RequiredArgsConstructor
public class QuizController {
    private final QuizService quizService;
    @GetMapping("")
    public List<Quiz> listStudents() {
        return quizService.findAll();
    }

}

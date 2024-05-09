package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Quiz_question;
import com.takima.backskeleton.services.Quiz_questionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("quiz_question")
@RestController
@RequiredArgsConstructor
public class Quiz_questionController {
    private final Quiz_questionService quiz_questionService;
    @GetMapping("")
    public List<Quiz_question> listStudents() {
        return quiz_questionService.findAll();
    }

}

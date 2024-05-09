package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Question_answer;
import com.takima.backskeleton.services.Question_answerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("question_answer")
@RestController
@RequiredArgsConstructor
public class Question_answerController {
    private final Question_answerService question_answerService;
    @GetMapping("")
    public List<Question_answer> listStudents() {
        return question_answerService.findAll();
    }

}

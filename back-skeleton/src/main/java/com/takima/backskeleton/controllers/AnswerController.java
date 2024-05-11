package com.takima.backskeleton.controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.takima.backskeleton.models.Answer;
import com.takima.backskeleton.services.AnswerService;

import java.util.List;

@CrossOrigin
@RequestMapping("answer")
@RestController
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;

    @GetMapping("")
    public List<Answer> listAnswer() {
        return answerService.findAll();
    }

}

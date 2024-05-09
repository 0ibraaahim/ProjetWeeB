package com.takima.backskeleton.controllers;

import com.takima.backskeleton.models.Questions;
import com.takima.backskeleton.services.QuestionsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@CrossOrigin
@RequestMapping("questions")
@RestController
@RequiredArgsConstructor
public class QuestionsController {
    private final QuestionsService questionsService;
    @GetMapping("")
    public List<Questions> listStudents() {
        return questionsService.findAll();
    }

}

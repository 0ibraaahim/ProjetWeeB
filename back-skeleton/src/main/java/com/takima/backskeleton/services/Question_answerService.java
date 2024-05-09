package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Question_answerDao;
import com.takima.backskeleton.models.Question_answer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class Question_answerService {
    private final Question_answerDao question_answerDao;
    public List<Question_answer> findAll() {
        Iterable<Question_answer> it = question_answerDao.findAll();
        List <Question_answer> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }
}

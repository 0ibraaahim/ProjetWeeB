package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.Quiz_questionDao;
import com.takima.backskeleton.models.Quiz_question;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class Quiz_questionService {
    private final Quiz_questionDao quiz_questionDao;
    public List<Quiz_question> findAll() {
        Iterable<Quiz_question> it = quiz_questionDao.findAll();
        List <Quiz_question> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }
}

package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.AnswerDao;
import com.takima.backskeleton.models.Answer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerDao answerDao;
    public List<Answer> findAll() {
        Iterable<Answer> it = answerDao.findAll();
        List <Answer> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }
}

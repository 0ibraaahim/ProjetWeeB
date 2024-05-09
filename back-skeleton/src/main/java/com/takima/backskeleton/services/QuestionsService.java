package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.QuestionsDao;
import com.takima.backskeleton.models.Questions;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionsService {
    private final QuestionsDao questionsDao;
    public List<Questions> findAll() {
        Iterable<Questions> it = questionsDao.findAll();
        List <Questions> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }
}

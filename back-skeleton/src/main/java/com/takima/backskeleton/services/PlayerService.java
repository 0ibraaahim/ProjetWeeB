package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.PlayerDao;
import com.takima.backskeleton.models.Player;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerDao playerDao;
    public List<Player> findAll() {
        Iterable<Player> it = playerDao.findAll();
        List <Player> users = new ArrayList<>();
        it.forEach(users::add);
        return users ;
    }
}

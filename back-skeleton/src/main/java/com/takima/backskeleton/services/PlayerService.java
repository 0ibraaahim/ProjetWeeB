package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.PlayerDao;
import com.takima.backskeleton.models.Player;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerDao playerDao;

    public Player createPlayer(Player player) {
        // Here, you can set the best score as needed
        // Save the player entity to the database
        return playerDao.save(player);
    }

    public Player updateBestScore(Player player) {
        Player tobeupdatedplayer = playerDao.findByPseudo(player.pseudo);
        if (player != null && player.bestScore > tobeupdatedplayer.bestScore) {
            tobeupdatedplayer.setBestScore(player.bestScore);
            return playerDao.save(tobeupdatedplayer);
        }
        return tobeupdatedplayer;
    }
    public List<Player> getAllPlayers() {
        return playerDao.findAll();
    }

}
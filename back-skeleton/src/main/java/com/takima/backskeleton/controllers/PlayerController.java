package com.takima.backskeleton.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.services.PlayerService;

import java.util.List;

@CrossOrigin
@RequestMapping("players")
@RestController
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;

    @PostMapping("")
    public Player createPlayer(@RequestBody Player player) {
        return playerService.createPlayer(player);
    }

    @PutMapping("") // Corrected endpoint URL
    public Player updateBestScore(@RequestBody Player player) {
        return playerService.updateBestScore(player);
    }

    @GetMapping("")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayersOrderByBestScoreDesc();
    }


}

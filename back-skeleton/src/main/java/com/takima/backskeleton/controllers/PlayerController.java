package com.takima.backskeleton.controllers;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.takima.backskeleton.models.Player;
import com.takima.backskeleton.services.PlayerService;

import java.util.List;

@CrossOrigin
@RequestMapping("students")
@RestController
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;
    @GetMapping("")
    public List<Player> listStudents() {
        return playerService.findAll();
    }

}

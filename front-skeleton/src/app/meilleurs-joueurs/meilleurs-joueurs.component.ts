// meilleurs-joueurs.component.ts
import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common'; // Ajout de l'import de CommonModule
import { QuizService } from '../services/quiz.service';
import { Player } from '../models/Player.model';

@Component({
  selector: 'app-meilleurs-joueurs',
  templateUrl: './meilleurs-joueurs.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./meilleurs-joueurs.component.scss']
})
export class MeilleursJoueursComponent implements OnInit {
  joueurs: Player[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getMeilleursJoueurs();
  }

  getMeilleursJoueurs(): void {
    this.quizService.getMeilleursJoueurs().subscribe(
      joueurs => {

        this.joueurs = joueurs.slice(0, 5);
      },
      error => {
        console.error('Erreur lors de la récupération des meilleurs joueurs :', error);
      }
    );
  }
}

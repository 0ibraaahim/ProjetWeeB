import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Quiz2} from "../models/Quiz2.model";
import { Observable } from "rxjs";
import { Quiz2Service } from "services/quiz2.service";
import { Questions2Service } from "services/question2.service";
import { Answer2Service } from "services/answer2.service";
import { Question2 } from "models/question2.model";
import { Answer2 } from "models/answer2.model";
import { FormsModule } from '@angular/forms';




@Component({
  selector: "profil",
  imports : [CommonModule,FormsModule,],
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
  standalone: true
})
export class ProfilComponent implements OnInit {


  quizzes: Quiz2[] = [{ id: 1, name: 'Math 2 ' },
    { id: 2, name: 'Quiz 2' },
    { id: 3, name: 'Quiz 3' }];


  question2: Question2[] = [
    {id : 1, question : 'Quelle est la racine carrée de 16 ?',quiz2_id : 1},
    {id : 2, question : 'Combien de degrés a un angle droit ?', quiz2_id : 1}
  ];


  answer2: Answer2[] = [{id : 1, response : '2', question_id : 1, response_value : false},
    {id : 2, response : '8', question_id : 1, response_value : false},
    {id : 3, response : '4', question_id : 1, response_value : true},
    {id : 4, response : '6', question_id : 1, response_value : false},
    {id : 5, response : '2', question_id : 2, response_value : false},
    {id : 6, response : '8', question_id : 2, response_value : false},
    {id : 7, response : '4', question_id : 2, response_value : true},
    {id : 8, response : '6', question_id : 2, response_value : false}]



  /*{ id: 1, name: 'Math 2 ' },
  { id: 2, name: 'Quiz 2' },
  { id: 3, name: 'Quiz 3' }


  {id : 1, question : 'Quelle est la racine carrée de 16 ?',quiz2_id : 1},
  {id : 2, question : 'Combien de degrés a un angle droit ?', quiz2_id : 1}

  {id : 1, response : '2', question_id : 1, response_value : false},
  {id : 2, response : '8', question_id : 1, response_value : false},
  {id : 3, response : '4', question_id : 1, response_value : true},
  {id : 4, response : '6', question_id : 1, response_value : false},
  {id : 5, response : '2', question_id : 2, response_value : false},
  {id : 6, response : '8', question_id : 2, response_value : false},
  {id : 7, response : '4', question_id : 2, response_value : true},
  {id : 8, response : '6', question_id : 2, response_value : false}*/




  newQuizName: string = '';
  newQuestions: Question2[] = [];
  newAnswers: Answer2[] = [];
  editedAnswer: Answer2[] = [];


  incrementingQuiz2Id = 1;
  incrementingQuestionId = 16;
  incrementingAnswerId = 61;

  selectedQuizId: number | null = null;
  successMessage: string = '';



  constructor(
    private quiz2Service: Quiz2Service,
    private qustions2Service: Questions2Service,
    private answer2Service: Answer2Service
  ) {}

  ngOnInit(): void {

  }

  getQuizzes(): void {
    this.quiz2Service.getQuizzes().subscribe(quizzes => this.quizzes = quizzes);
  }

  getQuestions(): void {
    this.qustions2Service.getQuestions().subscribe(questions => this.question2 = questions);
  }

  getAnswers(): void {
    this.answer2Service.getAnswers().subscribe(answers => this.answer2 = answers);
  }


  openModal(): void {
    const modalElements = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < modalElements.length; i++) {
      modalElements[i].style.display = 'block';
    }  }

  closeModal(): void {
    const modalElements = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < modalElements.length; i++) {
      modalElements[i].style.display = 'none';
    }
    this.selectedQuizId = null

  }

  getSelectedQuiz(): Quiz2 | null {
    if (this.selectedQuizId !== null) {
      return this.quizzes.find(quiz => quiz.id === this.selectedQuizId) || null;
    }
    return null;
  }

  getQuestionsForSelectedQuiz(): any[] {
    if (this.selectedQuizId !== null) {
      return this.question2.filter(question => question.quiz2_id === this.selectedQuizId);
    }
    return [];
  }

  getAnswerForSelectedQuiz(question_id : number ): any []{
    return this.answer2.filter(answer => answer.question_id === question_id);
  }


  saveQuestion(question: any, answers: Answer2[]): void {
    // Mettre à jour la question en utilisant le service des questions
    this.qustions2Service.updateQuestion(question).subscribe(
      () => {
        console.log('Question modifiée avec succès :', question);
        // Traitements supplémentaires après la modification de la question si nécessaire
      },
      error => {
        console.error('Une erreur s\'est produite lors de la sauvegarde de la question :', error);
        // Gérer l'erreur si nécessaire
      }
    );

    // Mettre à jour les réponses en utilisant le service des réponses
    answers.forEach(answer => {
      this.answer2Service.updateAnswer(answer).subscribe(
        () => {
          console.log('Réponse modifiée avec succès :', answer);
          // Traitements supplémentaires après la modification de la réponse si nécessaire
        },
        error => {
          console.error('Une erreur s\'est produite lors de la sauvegarde de la réponse :', error);
          // Gérer l'erreur si nécessaire
        }
      );
    });
  }



  createQuiz(): void {
    // Réinitialiser les valeurs du formulaire
    this.newQuizName = '';
    this.newQuestions = [];
    // Afficher le formulaire de création de quiz
    this.openCreateQuizModal();
    for (let i = 0; i < 5; i++) {
      const newQuestion: Question2 = { id: this.incrementingQuestionId, question: '', quiz2_id: this.incrementingQuiz2Id };
      this.newQuestions.push(newQuestion);
      for (let i = 0; i < 4; i++) {
        const newAnswers2: Answer2 = { id: this.incrementingAnswerId, response: '', question_id: this.incrementingQuestionId, response_value : false };
        this.newAnswers.push(newAnswers2);
        this.incrementingAnswerId++;
      }
      this.incrementingQuestionId++;
    }
  }



  saveQuiz(): void {
    const newQuiz: Quiz2 = { id: this.incrementingQuiz2Id, name: this.newQuizName };
    console.log(this.newQuestions);
    console.log(this.newAnswers);

    // Vérifier que le nom du quiz est saisi
    if (!this.newQuizName || this.newQuizName.trim() === '') {
      alert('Veuillez saisir un nom pour le quiz.');
      return;
    }
    // Vérifier qu'il y a au moins une question
    if (this.newQuestions.length === 4) {
      alert('Veuillez ajouter 5 questions.');
      return;
    }
    this.closeCreateQuizModal()

    this.quiz2Service.createQuiz(newQuiz).subscribe(
      () => {
        console.log('Quiz créé avec succès :', newQuiz);
        this.incrementingQuiz2Id++;
        // Traitements supplémentaires après la création du quiz si nécessaire

        // Créer chaque question
        this.newQuestions.forEach(question => {
          this.qustions2Service.createQuestion(question).subscribe(
            () => {
              console.log('Question créée avec succès :', question);
              this.getQuizzes();
              this.getQuestions();
              // Traitements supplémentaires après la création de la question si nécessaire
            },
            error => {
              console.error('Erreur lors de la création de la question :', error);
              // Gérer l'erreur lors de la création de la question
            }
          );
        });

        // Créer chaque réponse
        this.newAnswers.forEach(answer => {
          this.answer2Service.createAnswer(answer).subscribe(
            () => {
              console.log('Réponse créée avec succès :', answer);
              // Traitements supplémentaires après la création de la réponse si nécessaire
            },
            error => {
              console.error('Erreur lors de la création de la réponse :', error);
              // Gérer l'erreur lors de la création de la réponse
            }
          );
        });
      },
      error => {
        console.error('Erreur lors de la création du quiz :', error);
        // Gérer l'erreur lors de la création du quiz
      }
    );

  }


  openCreateQuizModal(): void {
    // Afficher le formulaire de création de quiz
    const modalElement = document.getElementById('createQuizModal2') as HTMLElement;
    modalElement.style.display = 'block';
  }

  closeCreateQuizModal(): void {
    // Fermer le formulaire de création de quiz
    const modalElement = document.getElementById('createQuizModal2') as HTMLElement;
    modalElement.style.display = 'none';
    this.incrementingQuestionId = this.incrementingQuestionId - 4
  }



  editQuiz(quiz: Quiz2) {

    this.newQuestions = []
    this.selectedQuizId = quiz.id;
    this.openModal();

  }

  deleteQuiz(quizId: number) {
    this.quiz2Service.deleteQuiz(quizId).subscribe(
      () => {
        this.successMessage = 'Le quiz à été supprimés avec succès';
        console.log(this.successMessage); // Affichez le message de succès dans la console
      },
      error => {
        console.error('Une erreur s\'est produite lors de la suppression du quiz:', error);
        // Affichez un message d'erreur à l'utilisateur si nécessaire
      }
    );
  }
}

import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { MajorsComponent } from "majors/majors.component"
import { MajorsResolver } from "majors/majors.resolver"
import { MajorStudentsResolver } from "majors/major-students/major-students.resolver"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import {AdminComponent} from "admin/admin.component"
import {HistoireComponent} from "histoire/histoire.component"
import {MathComponent} from "math/math.component"
import {PhysiqueComponent} from "physique/physique.component"
import {ProfilComponent} from "profil/profil.component";
import { MeilleursJoueursComponent } from './meilleurs-joueurs/meilleurs-joueurs.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "etudiants",
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    },
  },
  {path :"admin", component: AdminComponent},
  {path :"profil", component: ProfilComponent},
  {path :"histoire", component: HistoireComponent},
  {path :"math", component: MathComponent},
  {path :"physique", component: PhysiqueComponent},
  { path: 'meilleurs-joueurs', component: MeilleursJoueursComponent },

  {
    path: "details-etudiant/:id",
    component: StudentDetailsComponent,
    resolve: {
      student: StudentDetailsResolver,
    },
  },
  {
    path: "filieres",
    component: MajorsComponent,
    resolve: {
      majors: MajorsResolver,
    },
  },
  {
    path: "etudiants-filiere/:id",
    component: MajorStudentsComponent,
    resolve: {
      studentsFromMajor: MajorStudentsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

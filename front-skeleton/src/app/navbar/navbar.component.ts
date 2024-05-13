import { Component } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {
    this.links.push({ name: "Connexion Admin", href: "admin" })
    this.links.push({ name: "Meilleurs Joueurs", href: "meilleurs-joueurs" })
    this.links.push({name: "Accueil", href:"accueil"})

  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @Input() appareilName: string = "Téléphone";
  @Input() appareilStatut: string = "On";
  @Input() appareilAvatar: string = "assets/image/refri.jpg";

  getColor(): string {
    return this.appareilStatut === "On" ? "green" : "red";
  }
}

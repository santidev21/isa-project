import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primer-punto',
  imports: [PreguntasContainerComponent, CommonModule],
  standalone: true,
  templateUrl: './primer-punto.component.html',
  styleUrls: ['./primer-punto.component.scss']
})
export class PrimerPuntoComponent {
  modalImg: string = '';

  openModal(num: number) {
    this.modalImg = `/assets/linea-tiempo/respuestas/${num}.png`;
    console.log(this.modalImg);
    
  }
}

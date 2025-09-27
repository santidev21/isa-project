import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';

@Component({
  selector: 'app-primer-punto',
  imports: [PreguntasContainerComponent],
  standalone: true,
  templateUrl: './primer-punto.component.html',
  styleUrls: ['./primer-punto.component.scss']
})
export class PrimerPuntoComponent {
  modalTitle = '';
  modalText = '';

  openModal(title: string, text: string) {
    this.modalTitle = title;
    this.modalText = text;
  }
}

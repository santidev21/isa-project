import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';
import { CommonModule } from '@angular/common';
import { RespuestaService } from '../../services/respuesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primer-punto',
  imports: [PreguntasContainerComponent, CommonModule],
  standalone: true,
  templateUrl: './primer-punto.component.html',
  styleUrls: ['./primer-punto.component.scss']
})
export class PrimerPuntoComponent {
  modalImg: string = '';

  constructor(private respuestaService: RespuestaService, private router: Router) {}

  openModal(num: number) {
    this.modalImg = `/assets/linea-tiempo/respuestas/${num}.png`;
  }

  onResponder(respuesta: string) {
    this.respuestaService.setRespuesta('P1', respuesta);
    this.router.navigate(['/navegacion/segundo-punto']);
  }
}

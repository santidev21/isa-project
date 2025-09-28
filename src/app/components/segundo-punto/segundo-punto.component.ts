import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';
import { RespuestaService } from '../../services/respuesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segundo-punto',
  imports: [PreguntasContainerComponent],
  standalone: true,
  templateUrl: './segundo-punto.component.html',
  styleUrls: ['./segundo-punto.component.scss']
})
export class SegundoPuntoComponent {
  constructor(private respuestaService: RespuestaService, private router: Router) {}

  onResponder(respuesta: string) {
    this.respuestaService.setRespuesta('P2', respuesta);
    this.router.navigate(['/navegacion/resolucion']);
  }
}

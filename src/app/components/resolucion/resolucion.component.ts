import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';
import { CommonModule } from '@angular/common';
import { RespuestaService } from '../../services/respuesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolucion',
  imports: [PreguntasContainerComponent, CommonModule],
  standalone: true,
  templateUrl: './resolucion.component.html',
  styleUrls: ['./resolucion.component.scss']
})
export class ResolucionComponent {
  datosIA = [
    {
      img: '/assets/psicologo.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, eros nec efficitur euismod, lectus turpis sollicitudin augue, non ultricies enim nunc sit amet augue. Quisque ante magna, varius et vehicula congue, viverra eu nulla.'
    },
    {
      img: '/assets/psicologo.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, eros nec efficitur euismod, lectus turpis sollicitudin augue, non ultricies enim nunc sit amet augue. Quisque ante magna, varius et vehicula congue, viverra eu nulla.'
    },
    {
      img: '/assets/psicologo.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius, eros nec efficitur euismod, lectus turpis sollicitudin augue, non ultricies enim nunc sit amet augue. Quisque ante magna, varius et vehicula congue, viverra eu nulla.'
    }
  ];

  constructor(private respuestaService: RespuestaService, private router: Router) {}

  onResponder(respuesta: string) {
    this.respuestaService.setRespuesta('P3', respuesta);
    this.router.navigate(['/navegacion/participacion']);
  }
}

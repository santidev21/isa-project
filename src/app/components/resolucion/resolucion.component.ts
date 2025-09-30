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
      texto: 'El uso constante de la IA puede crear una falsa sensación de confort, pero no resuelve los conflictos emocionales profundos, lo que dificulta el desarrollo del criterio personal y la tolerancia a la frustración. Fuente: Masip, M. (2025)'
    },
    {
      img: '/assets/psicologo.jpg',
      texto: 'Los psicobots no pueden comprender las emociones humanas de forma auténtica, lo que puede aumentar la frustración y el aislamiento emocional. Fuente: Mendiguren, T. (2025)'
    },
    {
      img: '/assets/psicologo.jpg',
      texto: 'La interacción constante con la IA puede sobreestimular el sistema dopaminérgico, lo que eleva el riesgo de ansiedad y comportamientos adictivos. Fuente: Maid, J., & Dorigo, A. (2025)'
    }
  ];

  constructor(private router: Router) { }

  goToNext(){
    this.router.navigate(['/navegacion/participacion']);
  }
}

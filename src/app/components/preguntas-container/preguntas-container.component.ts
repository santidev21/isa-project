import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preguntas-container',
  templateUrl: './preguntas-container.component.html',
  styleUrls: ['./preguntas-container.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PreguntasContainerComponent {
  @Input() pregunta: string = '';
  @Input() respuestas: string[] = [];
  @Input() nota: string = '';
}

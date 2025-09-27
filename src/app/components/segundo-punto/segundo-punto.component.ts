import { Component } from '@angular/core';
import { PreguntasContainerComponent } from '../preguntas-container/preguntas-container.component';

@Component({
  selector: 'app-segundo-punto',
  imports: [PreguntasContainerComponent],
  standalone: true,
  templateUrl: './segundo-punto.component.html',
  styleUrls: ['./segundo-punto.component.scss']
})
export class SegundoPuntoComponent {

}

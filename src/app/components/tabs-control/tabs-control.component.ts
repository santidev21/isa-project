import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RespuestaService } from '../../services/respuesta.service';

@Component({
  selector: 'app-tabs-control',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './tabs-control.component.html',
  styleUrls: ['./tabs-control.component.scss']
})
export class TabsControlComponent {
  constructor(public respuestaService: RespuestaService) {}

  get segundoPuntoEnabled() {
    return this.respuestaService.tieneRespuesta('P1');
  }
  get resolucionEnabled() {
    return this.respuestaService.tieneRespuesta('P2');
  }
  
}

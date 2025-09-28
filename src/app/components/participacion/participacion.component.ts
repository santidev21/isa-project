import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../../services/respuesta.service';

@Component({
  selector: 'app-participacion',
  imports: [],
  standalone: true,
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.scss']
})
export class ParticipacionComponent implements OnInit {
  
  constructor(private respuestaService: RespuestaService) {}

  ngOnInit(): void {
    console.log(this.respuestaService.getRespuestas());
  }
}

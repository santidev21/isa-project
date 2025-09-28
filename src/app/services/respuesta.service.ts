import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RespuestaService {
  private respuestas: { [key: string]: string } = {};

  setRespuesta(pregunta: 'P1' | 'P2' | 'P3', respuesta: string) {
    this.respuestas[pregunta] = respuesta;
  }

  getRespuesta(pregunta: 'P1' | 'P2' | 'P3'): string | undefined {
    return this.respuestas[pregunta];
  }

  tieneRespuesta(pregunta: 'P1' | 'P2' | 'P3'): boolean {
    return !!this.respuestas[pregunta];
  }

  getRespuestas() {
    return { ...this.respuestas };
  }
}

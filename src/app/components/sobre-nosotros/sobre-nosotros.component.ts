import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.scss']
})
export class SobreNosotrosComponent {
equipo = [
  {
    foto: '/assets/equipo/placeholder.jpg',
    nombre: 'Maria Isabel Sierra',
    titulos: [
      'Estudiante de octavo semestre de Comunicación Social y Periodismo. Universidad Pontificia Bolivariana.'
    ]
  },
  {
    foto: '/assets/equipo/placeholder.jpg',
    nombre: 'Luisa Martínez',
    titulos: [
      'Periodista, Universidad de Antioquia. Asesora de comunicaciones.',
      'Estudiante de Maestría en Comunicación Digital.'
    ]
  },
  {
    foto: '/assets/equipo/placeholder.jpg',
    nombre: 'Slendy Flórez',
    titulos: [
      'Comunicadora Social, Universidad de Pamplona.',
      'Periodista de la Alcaldía de Lebrija',
      'Locutora de Zumba Latina Radio.',
      'Estudiante de Maestría en Comunicación Digital.'
    ]
  },
  {
    foto: '/assets/equipo/placeholder.jpg',
    nombre: 'Xue Perez Barrios',
    titulos: [
      'Comunicadora Social y Periodista, Universidad Pontificia Bolivariana.',
      'Estudiante de Maestría en Comunicación Digital.'
    ]
  },
  {
    foto: '/assets/equipo/placeholder.jpg',
    nombre: 'Claudia Sandoval',
    titulos: [
      'Comunicadora Social y Periodista, Universidad Pontificia Bolivariana.',,
      'Periodista de Televisión Regional del Oriente.',
      'Estudiante de Maestría en Comunicación Digital.'
    ]
  }
];
}

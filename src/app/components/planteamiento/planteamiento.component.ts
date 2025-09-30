import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planteamiento',
  imports: [],
  standalone: true,
  templateUrl: './planteamiento.component.html',
  styleUrls: ['./planteamiento.component.scss']
})
export class PlanteamientoComponent {
  modalTitle = '';
  modalText = '';

  constructor(private router: Router) { }

  openModal(title: string, text: string) {
    this.modalTitle = title;
    this.modalText = text;
  }

  goToNext(){
    this.router.navigate(['/navegacion/primer-punto']);
  }
}

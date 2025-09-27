import { Component } from '@angular/core';


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

  openModal(title: string, text: string) {
    this.modalTitle = title;
    this.modalText = text;
  }
}

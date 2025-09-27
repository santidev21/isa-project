import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs-control',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './tabs-control.component.html',
  styleUrls: ['./tabs-control.component.scss']
})
export class TabsControlComponent {

}

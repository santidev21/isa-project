import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../../services/respuesta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participacion',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.scss']
})
export class ParticipacionComponent implements OnInit {
  
  postTitle: string = '';
  postDescription: string = '';
  comments: string[] = [];

  constructor(private respuestaService: RespuestaService) {}

ngOnInit(): void {
const redditUrl = 'https://www.reddit.com/r/theIsAproject/comments/1nur8yz/comparte_tu_opini%C3%B3n_la_ia_es_un_buen_sustituto/.json';
const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(redditUrl);

fetch(proxyUrl)
  .then(res => res.json())
  .then(data => {
    const redditData = JSON.parse(data.contents || JSON.stringify(data));
    const post = redditData[0].data.children[0].data;
    this.postTitle = post.title;
    this.postDescription = post.selftext || '';
    const commentsArr = redditData[1].data.children;
    this.comments = commentsArr
      .map((c: any) => c.data.body)
      .filter((body: string) => !!body)
      .map((body: string) => body.length > 120 ? body.slice(0, 120) + '...' : body);
  })
  .catch(err => console.error('Error fetching Reddit data:', err));
}
}

import { Component, input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  post = input.required<Post>();
}

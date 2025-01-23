import { Component, signal } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from './models/post';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-root',
  imports: [PostFormComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = signal<Post[]>([]);

  addPost(post: Post): void {
    this.posts.update((value) => [...value, post]);
  }
}

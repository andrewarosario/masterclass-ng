import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add post to the list', () => {
    component.addPost({ title: 'Post title', body: 'Post body' });
    expect(component.posts()).toEqual([
      { title: 'Post title', body: 'Post body' },
    ]);

    component.addPost({ title: 'Post title 2', body: 'Post body 2' });
    expect(component.posts()).toEqual([
      { title: 'Post title', body: 'Post body' },
      { title: 'Post title 2', body: 'Post body 2' },
    ]);
  });
});

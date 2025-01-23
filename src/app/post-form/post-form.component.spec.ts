import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeTruthy();
  });

  it('should fill input title correctly', () => {
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));
    expect(component.form.controls.title.value).toBe('Post title');
  });

  it('should fill input body correctly', () => {
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));
    expect(component.form.controls.body.value).toBe('Post body');
  });

  it('should submit form', () => {
    spyOn(component.submitForm, 'emit');
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));

    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.submitForm.emit).toHaveBeenCalledWith({
      title: 'Post title',
      body: 'Post body',
    });
  });
});

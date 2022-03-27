import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBufferComponent } from './image-buffer.component';

describe('ImageBufferComponent', () => {
  let component: ImageBufferComponent;
  let fixture: ComponentFixture<ImageBufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBufferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

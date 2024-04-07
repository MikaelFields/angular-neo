import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameDisplayComponent } from './frameDisplay.component';

describe('FrameDisplayComponent', () => {
  let component: FrameDisplayComponent;
  let fixture: ComponentFixture<FrameDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

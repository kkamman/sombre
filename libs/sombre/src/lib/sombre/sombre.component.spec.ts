import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SombreComponent } from './sombre.component';

describe('SombreComponent', () => {
  let component: SombreComponent;
  let fixture: ComponentFixture<SombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SombreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

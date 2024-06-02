import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexanderComponent } from './alexander.component';

describe('AlexanderComponent', () => {
  let component: AlexanderComponent;
  let fixture: ComponentFixture<AlexanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlexanderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlexanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

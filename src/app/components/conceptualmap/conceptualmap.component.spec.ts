import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualmapComponent } from './conceptualmap.component';

describe('ConceptualmapComponent', () => {
  let component: ConceptualmapComponent;
  let fixture: ComponentFixture<ConceptualmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptualmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptualmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

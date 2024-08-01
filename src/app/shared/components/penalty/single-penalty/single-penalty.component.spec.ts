import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePenaltyComponent } from './single-penalty.component';

describe('SinglePenaltyComponent', () => {
  let component: SinglePenaltyComponent;
  let fixture: ComponentFixture<SinglePenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePenaltyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

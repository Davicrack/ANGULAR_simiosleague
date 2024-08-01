import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRaceResultComponent } from './single-race-result.component';

describe('SingleRaceResultComponent', () => {
  let component: SingleRaceResultComponent;
  let fixture: ComponentFixture<SingleRaceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRaceResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRaceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

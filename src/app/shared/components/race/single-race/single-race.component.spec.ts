import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRaceComponent } from './single-race.component';

describe('SingleRaceComponent', () => {
  let component: SingleRaceComponent;
  let fixture: ComponentFixture<SingleRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

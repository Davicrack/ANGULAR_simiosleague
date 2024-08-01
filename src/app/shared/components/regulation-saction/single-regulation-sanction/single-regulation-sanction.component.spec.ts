import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRegulationSanctionComponent } from './single-regulation-sanction.component';

describe('SingleRegulationSanctionComponent', () => {
  let component: SingleRegulationSanctionComponent;
  let fixture: ComponentFixture<SingleRegulationSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRegulationSanctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRegulationSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

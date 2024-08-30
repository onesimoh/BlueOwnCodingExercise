import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsPositionsComponent } from './investors-positions.component';

describe('InvestorsPositionsComponent', () => {
  let component: InvestorsPositionsComponent;
  let fixture: ComponentFixture<InvestorsPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestorsPositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorsPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

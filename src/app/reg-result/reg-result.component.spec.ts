import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegResultComponent } from './reg-result.component';

describe('RegResultComponent', () => {
  let component: RegResultComponent;
  let fixture: ComponentFixture<RegResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

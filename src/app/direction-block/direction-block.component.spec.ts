import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionBlockComponent } from './direction-block.component';

describe('DirectionBlockComponent', () => {
  let component: DirectionBlockComponent;
  let fixture: ComponentFixture<DirectionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

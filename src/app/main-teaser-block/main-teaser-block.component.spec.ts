import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeaserBlockComponent } from './main-teaser-block.component';

describe('MainTeaserBlockComponent', () => {
  let component: MainTeaserBlockComponent;
  let fixture: ComponentFixture<MainTeaserBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTeaserBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTeaserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

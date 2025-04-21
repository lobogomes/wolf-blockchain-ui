import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeComponent } from './landscape.component';

describe('LandscapeComponent', () => {
  let component: LandscapeComponent;
  let fixture: ComponentFixture<LandscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

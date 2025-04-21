import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePlaygroundComponent } from './theme-playground.component';

describe('ThemePlaygroundComponent', () => {
  let component: ThemePlaygroundComponent;
  let fixture: ComponentFixture<ThemePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

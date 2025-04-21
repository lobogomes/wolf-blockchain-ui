import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWolfComponent } from './icon-wolf.component';

describe('IconWolfComponent', () => {
  let component: IconWolfComponent;
  let fixture: ComponentFixture<IconWolfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWolfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCoinComponent } from './icon-coin.component';

describe('IconCoinComponent', () => {
  let component: IconCoinComponent;
  let fixture: ComponentFixture<IconCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

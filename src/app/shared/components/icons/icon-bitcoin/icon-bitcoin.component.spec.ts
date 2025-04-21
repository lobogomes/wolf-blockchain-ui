import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBitcoinComponent } from './icon-bitcoin.component';

describe('IconBitcoinComponent', () => {
  let component: IconBitcoinComponent;
  let fixture: ComponentFixture<IconBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBitcoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

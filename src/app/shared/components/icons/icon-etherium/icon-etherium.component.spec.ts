import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEtheriumComponent } from './icon-etherium.component';

describe('IconEtheriumComponent', () => {
  let component: IconEtheriumComponent;
  let fixture: ComponentFixture<IconEtheriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconEtheriumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconEtheriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

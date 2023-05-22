import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoCardComponent } from './addto-card.component';

describe('AddtoCardComponent', () => {
  let component: AddtoCardComponent;
  let fixture: ComponentFixture<AddtoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtoCardComponent]
    });
    fixture = TestBed.createComponent(AddtoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

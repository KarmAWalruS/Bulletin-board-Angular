import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrChangeCardComponent } from './new-or-change-card.component';

describe('NewOrChangeCardComponent', () => {
  let component: NewOrChangeCardComponent;
  let fixture: ComponentFixture<NewOrChangeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrChangeCardComponent]
    });
    fixture = TestBed.createComponent(NewOrChangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteeShowComponent } from './invitee-show.component';

describe('InviteeShowComponent', () => {
  let component: InviteeShowComponent;
  let fixture: ComponentFixture<InviteeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

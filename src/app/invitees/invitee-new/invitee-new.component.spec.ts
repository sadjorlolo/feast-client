import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteeNewComponent } from './invitee-new.component';

describe('InviteeNewComponent', () => {
  let component: InviteeNewComponent;
  let fixture: ComponentFixture<InviteeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

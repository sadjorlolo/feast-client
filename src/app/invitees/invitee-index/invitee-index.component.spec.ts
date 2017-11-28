import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteeIndexComponent } from './invitee-index.component';

describe('InviteeIndexComponent', () => {
  let component: InviteeIndexComponent;
  let fixture: ComponentFixture<InviteeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

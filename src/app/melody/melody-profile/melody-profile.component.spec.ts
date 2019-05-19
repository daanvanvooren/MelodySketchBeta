import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodyProfileComponent } from './melody-profile.component';

describe('MelodyProfileComponent', () => {
  let component: MelodyProfileComponent;
  let fixture: ComponentFixture<MelodyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

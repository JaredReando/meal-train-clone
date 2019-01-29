import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTheBasicsComponent } from './learn-the-basics.component';

describe('LearnTheBasicsComponent', () => {
  let component: LearnTheBasicsComponent;
  let fixture: ComponentFixture<LearnTheBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnTheBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTheBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

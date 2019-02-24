import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3Component } from './task3.component';

describe('ContactComponent', () => {
  let component: Task3Component;
  let fixture: ComponentFixture<Task3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

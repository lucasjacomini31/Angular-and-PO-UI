import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojabuyComponent } from './lojabuy.component';

describe('LojabuyComponent', () => {
  let component: LojabuyComponent;
  let fixture: ComponentFixture<LojabuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojabuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojabuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

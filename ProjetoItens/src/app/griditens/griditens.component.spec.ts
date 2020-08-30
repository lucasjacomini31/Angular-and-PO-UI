import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriditensComponent } from './griditens.component';

describe('GriditensComponent', () => {
  let component: GriditensComponent;
  let fixture: ComponentFixture<GriditensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriditensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriditensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

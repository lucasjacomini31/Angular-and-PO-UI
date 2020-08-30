import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaritensComponent } from './visualizaritens.component';

describe('VisualizaritensComponent', () => {
  let component: VisualizaritensComponent;
  let fixture: ComponentFixture<VisualizaritensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaritensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaritensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

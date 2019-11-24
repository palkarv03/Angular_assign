import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectonicComponent } from './electonic.component';

describe('ElectonicComponent', () => {
  let component: ElectonicComponent;
  let fixture: ComponentFixture<ElectonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

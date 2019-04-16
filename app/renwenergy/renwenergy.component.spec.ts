import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenwenergyComponent } from './renwenergy.component';

describe('RenwenergyComponent', () => {
  let component: RenwenergyComponent;
  let fixture: ComponentFixture<RenwenergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenwenergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenwenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

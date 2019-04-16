import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiComponent } from './digi.component';

describe('DigiComponent', () => {
  let component: DigiComponent;
  let fixture: ComponentFixture<DigiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

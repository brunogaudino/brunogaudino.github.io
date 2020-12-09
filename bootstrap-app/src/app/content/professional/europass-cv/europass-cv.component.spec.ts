import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropassCvComponent } from './europass-cv.component';

describe('EuropassCvComponent', () => {
  let component: EuropassCvComponent;
  let fixture: ComponentFixture<EuropassCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropassCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropassCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

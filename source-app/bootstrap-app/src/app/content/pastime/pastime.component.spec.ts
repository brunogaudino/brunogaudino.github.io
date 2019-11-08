import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastimeComponent } from './pastime.component';

describe('PastimeComponent', () => {
  let component: PastimeComponent;
  let fixture: ComponentFixture<PastimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuClassesComponent } from './eu-classes.component';

describe('EuClassesComponent', () => {
  let component: EuClassesComponent;
  let fixture: ComponentFixture<EuClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

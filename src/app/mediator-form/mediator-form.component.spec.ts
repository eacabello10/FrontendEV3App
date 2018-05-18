import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatorFormComponent } from './mediator-form.component';

describe('MediatorFormComponent', () => {
  let component: MediatorFormComponent;
  let fixture: ComponentFixture<MediatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

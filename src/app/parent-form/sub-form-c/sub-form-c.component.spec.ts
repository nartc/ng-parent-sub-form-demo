import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormCComponent } from './sub-form-c.component';

describe('SubFormCComponent', () => {
  let component: SubFormCComponent;
  let fixture: ComponentFixture<SubFormCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

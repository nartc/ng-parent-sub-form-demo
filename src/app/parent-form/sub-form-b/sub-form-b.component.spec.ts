import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormBComponent } from './sub-form-b.component';

describe('SubFormBComponent', () => {
  let component: SubFormBComponent;
  let fixture: ComponentFixture<SubFormBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

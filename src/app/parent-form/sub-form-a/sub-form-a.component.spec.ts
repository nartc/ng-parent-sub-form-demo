import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormAComponent } from './sub-form-a.component';

describe('SubFormAComponent', () => {
  let component: SubFormAComponent;
  let fixture: ComponentFixture<SubFormAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

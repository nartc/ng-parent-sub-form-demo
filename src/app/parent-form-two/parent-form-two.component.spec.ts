import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFormTwoComponent } from './parent-form-two.component';

describe('ParentFormTwoComponent', () => {
  let component: ParentFormTwoComponent;
  let fixture: ComponentFixture<ParentFormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

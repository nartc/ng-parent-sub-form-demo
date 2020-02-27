import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-form-two',
  templateUrl: './parent-form-two.component.html',
  styleUrls: ['./parent-form-two.component.css']
})
export class ParentFormTwoComponent implements OnInit {

  parentForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      subFormB: null,
      subFormC: null
    });
  }

  onSubmit() {
    console.log(this.parentForm);
  }

  onFormReady(name: string, subForm: FormGroup) {
    this.parentForm.setControl(name, subForm);
  }

}

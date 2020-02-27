import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  parentForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      subFormA: null,
      subFormB: null
    });
  }

  onSubmit() {
    console.log(this.parentForm);
  }

  onFormReady(name: string, subForm: FormGroup) {
    this.parentForm.setControl(name, subForm);
  }
}

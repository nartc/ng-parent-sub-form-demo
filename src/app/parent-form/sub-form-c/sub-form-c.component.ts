import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubFormBase } from '../base-subform';

@Component({
  selector: 'app-sub-form-c',
  templateUrl: './sub-form-c.component.html',
  styleUrls: ['./sub-form-c.component.css']
})
export class SubFormCComponent extends SubFormBase implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      foo: [''],
      bar: ['']
    });

    this.formReady.emit(this.formGroup);
  }

}

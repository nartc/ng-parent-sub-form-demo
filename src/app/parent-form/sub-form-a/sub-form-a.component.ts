import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubFormBase } from '../base-subform';

@Component({
  selector: 'app-sub-form-a',
  templateUrl: './sub-form-a.component.html',
  styleUrls: ['./sub-form-a.component.css']
})
export class SubFormAComponent extends SubFormBase implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
    this.formReady.emit(this.formGroup);
  }

}

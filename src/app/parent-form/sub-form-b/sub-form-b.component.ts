import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubFormBase } from '../base-subform';

@Component({
  selector: 'app-sub-form-b',
  templateUrl: './sub-form-b.component.html',
  styleUrls: ['./sub-form-b.component.css']
})
export class SubFormBComponent extends SubFormBase implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      bio: [''],
      age: ['']
    });
    this.formReady.emit(this.formGroup);
  }

}

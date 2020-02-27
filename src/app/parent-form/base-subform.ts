import { EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export abstract class SubFormBase {
  @Output() public formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  public formGroup: FormGroup;

  public formHasError(): boolean {
    return (this.formGroup.touched || this.formGroup.dirty) && this.formGroup.invalid;
  }

  public controlInvalid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return (control.touched || control.dirty) && control.invalid;
  }

  public controlHasError(controlName: string, errorName: string): boolean {
    const control = this.control(controlName);
    return control.hasError(errorName);
  }

  public control(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }
}

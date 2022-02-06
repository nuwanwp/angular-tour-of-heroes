import {Component, Injector, LOCALE_ID, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        dateStart: [''],
        dateEnd: ['']
      },
      {
        validators: [Validation.match('dateStart', 'dateEnd')]
      }
    );
    this.form.markAllAsTouched();
  }

  getError(): boolean {
    if (this.form?.hasError('dates')) {
      return true;
    } else {
      return false;
    }
  }

}


export default class Validation {
  static match(dateStart: string, dateEnd: string): ValidatorFn {
    return (controls: AbstractControl) => {
      let invalid = false;
      const dateStartControl = controls.get(dateStart);
      const dateEndValueControl = controls.get(dateEnd);

      if (!isEmpty(dateStartControl?.value) && !isEmpty(dateEndValueControl?.value)) {

        if (dateEndValueControl?.value < dateStartControl?.value) {
          invalid = true;
          dateEndValueControl?.setErrors({dates: 'To Date should be higher than From Date'});
        }

      } else if (isEmpty(dateStartControl?.value) && !isEmpty(dateEndValueControl?.value)) {
        invalid = true;
        dateStartControl?.setErrors({dates: 'From Date is required'});
      } else if (!isEmpty(dateStartControl?.value) && isEmpty(dateEndValueControl?.value)) {
        invalid = true;
        dateEndValueControl?.setErrors({dates: 'To Date is required'});
      }


      if (!invalid) {
        dateStartControl?.setErrors(null);
        dateEndValueControl?.setErrors(null);
      }

      return {};
    };
  }


}

const isEmpty = (value: any): boolean => {
  return value === '' || value === null ? true : false;
};

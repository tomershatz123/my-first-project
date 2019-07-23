import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

import * as moment from 'moment';


@Component({
  selector: 'app-time-validate',
  templateUrl: './time-validate.component.html',
  styleUrls: ['./time-validate.component.css']
})
export class TimeValidateComponent implements OnInit {
  testForm: FormGroup;
  constructor() { 
    this.testForm = new FormGroup({
      'time': new FormControl('', this.customTimeValidator.bind(this))
    });
  }

  ngOnInit() {
  }

  private customTimeValidator(control: FormControl): ValidationErrors {
    if (!control.value) {
      return null;
    }
    let valid = moment(control.value, 'YYYY-M-DTHH:mm:ss.SSSZ', true).isValid();
    if (!valid) {
      return {'invalidFormat': true};
    }
    return null;    
  }

  onSubmit() {
    console.log(this.testForm);
  }


}

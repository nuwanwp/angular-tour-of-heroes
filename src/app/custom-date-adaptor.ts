import * as _moment from 'moment';
import {NativeDateAdapter} from '@angular/material/core';
import * as moment from 'moment';

export class FedDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {

    date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );

    return moment(date).format('DD/MM/YYYY');
  }

  parse(value: any): Date | null {
    if (!moment(value, 'DD/MM/YYYY', true).isValid()) {
      return super.invalid();
    }
    return moment(value, 'DD/MM/YYYY', true).toDate();
  }
}

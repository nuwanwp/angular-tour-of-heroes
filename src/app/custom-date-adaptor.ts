import * as _moment from 'moment';
import {NativeDateAdapter} from '@angular/material/core';
import * as moment from 'moment';

export class FedDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {

    date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );

    return moment(date).format('M/D/YYYY');
  }

  parse(value: any): Date | null {
    if (!moment(value, 'M/D/YYYY', true).isValid()) {
      return super.invalid();
    }
    return moment(value, 'M/D/YYYY', true).toDate();
  }
}

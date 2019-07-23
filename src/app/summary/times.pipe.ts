import { Pipe, PipeTransform } from '@angular/core';

import { TimeConfig } from '../model/time';

@Pipe({
  name: 'timespipe',
  pure: false
})
export class TimesPipe implements PipeTransform {

  transform(timeConfig: TimeConfig): string {
    let time1 = timeConfig.timeOptions.find(time => time.id === timeConfig.selectedId);
    return time1.name || "error";
  }
}

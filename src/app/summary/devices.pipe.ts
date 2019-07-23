import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../model/device';

@Pipe({
  name: 'devicespipe',
  pure: false
})
export class DevicesPipe implements PipeTransform {

  transform(devices: Device[]): Device[] {
    return devices.filter(dev => dev.active === 1);
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { DeviceGroup } from '../../model/device-group';

@Component({
  selector: 'app-device-group',
  templateUrl: './device-group.component.html',
  styleUrls: ['./device-group.component.css']
})
export class DeviceGroupComponent implements OnInit {

  @Input() deviceGroup: DeviceGroup;
  expanded: boolean = true;
  
  constructor() { }

  ngOnInit() {
    console.log(this.deviceGroup);
    
  }

  checkAll() {
    let toCheck = !this.areAllActive();
    this.deviceGroup.devices.forEach(dev => dev.active = toCheck ? 1 : 0);
  }

  areAllActive() {
    return this.deviceGroup.devices.every(dev => dev.active === 1);
  }

}

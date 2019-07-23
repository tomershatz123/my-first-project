import { Component, OnInit } from '@angular/core';

import { IntegService } from '../integ.service';
import { DeviceGroup } from '../model/device-group';

@Component({
  selector: 'app-blackboxes',
  templateUrl: './blackboxes.component.html',
  styleUrls: ['./blackboxes.component.css']
})
export class BlackboxesComponent implements OnInit {

  deviceGroups: DeviceGroup[] = [];

  constructor(private integService: IntegService) { }

  ngOnInit() {
    this.deviceGroups = this.integService.getDeviceGroups();
  }

}

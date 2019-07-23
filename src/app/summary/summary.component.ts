import { Component, OnInit } from '@angular/core';

import { IntegService } from '../integ.service';
import { DeviceGroup } from '../model/device-group';
import { Protocol } from '../model/protocol';
import { TimeFrame, TimeConfig } from '../model/time';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  deviceGroups: DeviceGroup[] = [];
  protocols: Protocol[];
  timeConfig: TimeConfig;

  constructor(private integService: IntegService) { }

  ngOnInit() {
    this.deviceGroups = this.integService.getDeviceGroups();
    this.protocols = this.integService.getProtocols();
    this.timeConfig = this.integService.getTimeOptions();
  }

  onClear() {
    this.integService.clear();
  }

  canStart() {
    return this.integService.canStart();
  }

  onStartLearning() {
    this.integService.startLearning();
  }

  areAnyProtocols(): boolean {
    return (this.integService.getSelectedProtocolsIds().length > 0);
  }

  areAnyDevices(): boolean {
    return (this.integService.getActiveDeviceIds().length > 0);
  }
}

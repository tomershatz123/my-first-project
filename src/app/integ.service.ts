import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { DeviceGroup } from './model/device-group';
import { Device } from './model/device';
import { Protocol } from './model/protocol';
import { TimeConfig } from './model/time';
import { DATA } from './ex_data';

@Injectable({
  providedIn: 'root'
})
export class IntegService {
  deviceGroups: DeviceGroup[] = [];
  protocols: Protocol[] = [];
  timeConfig: TimeConfig;

  constructor(private http:HttpClient) { 
    this.deviceGroups = DATA.device_groups;
    this.protocols = DATA.protocols;
    let selId = DATA.times.length > 0 ? DATA.times[0].id : 1;
    this.timeConfig = { timeOptions: DATA.times, selectedId: selId}
  }

  getDeviceGroups(): DeviceGroup[] {
    return this.deviceGroups;    
  }

  getProtocols(): Protocol[] {
    return this.protocols;
  }

  getTimeOptions() {
    return this.timeConfig;
  }

  clear() {
    this.deviceGroups.forEach(devGrp => devGrp.devices.forEach(dev => dev.active = 0));
    this.protocols.forEach(protocol => protocol.selected = false);
    this.timeConfig.selectedId = this.timeConfig.timeOptions.length > 0 ? this.timeConfig.timeOptions[0].id : 1;
  }

  getGrpActiveDeviceIds(devGrp: DeviceGroup): number[] {
    return devGrp.devices.filter(dev => dev.active === 1).map(dev => dev.id);
  }

  getActiveDeviceIds() : number[]{
    let ids: number[] = [];
    this.deviceGroups.forEach(devGrp => {
      ids = ids.concat(this.getGrpActiveDeviceIds(devGrp));
    });
    return ids;
  }

  getSelectedProtocolsIds() : number[]{
    return this.protocols.filter(prot => prot.selected).map(prot => prot.id);
  }

  getSelectedTimeId() : number {
    let time1 = this.timeConfig.timeOptions.find(time => time.id === this.timeConfig.selectedId);
    return time1.id;
  }

  canStart(): boolean {
    return (this.getActiveDeviceIds().length > 0 && this.getSelectedProtocolsIds().length > 0);
  }

  startLearning() {
    let params = new HttpParams();
    params = params.append('devices', this.getActiveDeviceIds().join());
    params = params.append('protocols', this.getSelectedProtocolsIds().join());
    params = params.append('times', this.getSelectedTimeId().toString());

    return this.http.get('ex.html', { params: params }
    ).subscribe(
      data => {
        console.log(data);
      },
      err => {
        alert("error: [" + err.status + '] ' + err.message);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';

import { IntegService } from '../integ.service';
import { TimeFrame, TimeConfig } from '../model/time';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  timeConfig: TimeConfig;

  constructor(private integService: IntegService) { }

  ngOnInit() {
    this.timeConfig = this.integService.getTimeOptions();
  }

}

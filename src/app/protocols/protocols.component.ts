import { Component, OnInit } from '@angular/core';

import { IntegService } from '../integ.service';
import { Protocol } from '../model/protocol';


@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {
  protocols: Protocol[];

  constructor(private integService: IntegService) { }

  ngOnInit() {
    this.protocols = this.integService.getProtocols();
  }

}

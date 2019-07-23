import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlackboxesComponent } from './blackboxes/blackboxes.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { TimesComponent } from './times/times.component';
import { SummaryComponent } from './summary/summary.component';
import { DeviceGroupComponent } from './blackboxes/device-group/device-group.component';
import { DevicesPipe } from './summary/devices.pipe';
import { ProtocolsPipe } from './summary/protocols.pipe';
import { TimesPipe } from './summary/times.pipe';
import { TimeValidateComponent } from './time-validate/time-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackboxesComponent,
    ProtocolsComponent,
    TimesComponent,
    SummaryComponent,
    DeviceGroupComponent,
    DevicesPipe,
    ProtocolsPipe,
    TimesPipe,
    TimeValidateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

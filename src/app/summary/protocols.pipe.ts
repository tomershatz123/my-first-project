import { Pipe, PipeTransform } from '@angular/core';

import { Protocol } from '../model/protocol';

@Pipe({
  name: 'protocolspipe',
  pure: false
})
export class ProtocolsPipe implements PipeTransform {

  transform(protocols: Protocol[]): string {
    return protocols.filter(prot => prot.selected === true).map(prot => prot.name).join(', ');
  }

}

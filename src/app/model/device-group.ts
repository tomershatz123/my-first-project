import { Device } from './device';

export interface DeviceGroup {
    id: string,
	name: string,
	devices: Device[]
}
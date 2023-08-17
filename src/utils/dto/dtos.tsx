export interface IDevices {
  product: IProduct;
  id: string;
  line: ILine;
  icon: IIcon;
  shortnames: string[];
  unifi: IUnifi;
}

export interface IProduct {
  name: string;
  abbrev: string;
}

export interface ILine {
  name: string;
  id: string;
}

export interface IIcon {
  resolutions: number[][];
  id: string;
}

export interface IUnifi {
  network: INetwork;
}

export interface INetwork {
  radios: any;
  numberOfPorts: number;
}

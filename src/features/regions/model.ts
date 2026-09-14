export interface Region {
  name: string;
}

export interface RegionState {
  list: {
    items: Region[];
  };
}

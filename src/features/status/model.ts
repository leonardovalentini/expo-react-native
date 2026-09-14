export interface Status {
  name: string;
}

export interface StatusState {
  list: {
    items: Status[];
  };
}

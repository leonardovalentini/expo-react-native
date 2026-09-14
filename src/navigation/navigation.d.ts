export type CustomersStackParamList = {
  NewCustomer: { region?: string; status?: string };
  Customers: { region?: string; status?: string };
  UpdateCustomer: { id: number };
  DetailsCustomer: { id: number };
};
export type RegionsStackParamList = {
  Regions: undefined;
};

export type RootTabParamList = {
  CustomersTab: {
    screen: keyof CustomersStackParamList;
    params?: CustomersStackParamList[keyof CustomersStackParamList];
  };
  RegionsTab: {
    screen: keyof CustomersStackParamList;
    params?: CustomersStackParamList[keyof CustomersStackParamList];
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

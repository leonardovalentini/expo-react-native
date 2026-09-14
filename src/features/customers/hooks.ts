import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

import * as actions from "./reducers";
import { Customer, CustomerFormFields } from "./model";

interface NewCustomerResult {
  onSubmit: () => void;
}

interface UpdateCustomerResult {
  onSubmit: (id: number) => void;
}

export const useUpdateFields = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.customers.form.fields);

  return {
    fields,
    setFormField: (field: keyof CustomerFormFields, value: string) => {
      return dispatch(actions.setFormField({ field, value }));
    },
    loadCustomer: ({
      customer,
      region,
      status,
    }: {
      customer?: Customer;
      region?: string;
      status?: string;
    }) => {
      return dispatch(actions.setForm({ customer, region, status }));
    },
  };
};

export const useNewCustomer = (): NewCustomerResult => {
  const dispatch = useAppDispatch();

  return {
    onSubmit: () => {
      dispatch(actions.createCustomer());
    },
  };
};

export const useUpdateCustomer = (): UpdateCustomerResult => {
  const dispatch = useAppDispatch();

  return {
    onSubmit: (id: number) => {
      dispatch(actions.updateCustomer({ id }));
    },
  };
};

export const useListCustomers = ({
  region,
  status,
}: {
  region?: string;
  status?: string;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.loadCustomers({ region, status }));
  }, [dispatch, region, status]);

  return useAppSelector((state) => state.customers.list.items);
};

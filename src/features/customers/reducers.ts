import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Customer,
  CustomerState,
  FormFieldPayload,
  FormPayload,
} from "./model";

const name = "customers";

const initialState: CustomerState = {
  list: {
    items: [],
  },
  form: {
    fields: {
      full_name: null,
      email: null,
      phone: null,
      company: null,
      region: null,
      status: null,
    },
  },
};

const reducers = {
  createCustomer: (state: CustomerState) => {},
  updateCustomer: (
    state: CustomerState,
    { payload }: PayloadAction<{ id: number }>,
  ) => {},
  updateCustomerList: (
    state: CustomerState,
    { payload }: PayloadAction<Customer[]>,
  ) => {
    state.list.items = payload;
  },
  createCustomerError: (
    state: CustomerState,
    { payload }: PayloadAction<unknown>,
  ) => {},
  updateCustomerError: (
    state: CustomerState,
    { payload }: PayloadAction<unknown>,
  ) => {},
  setFormField: (
    state: CustomerState,
    { payload }: PayloadAction<FormFieldPayload>,
  ) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
  setForm: (state: CustomerState, { payload }: PayloadAction<FormPayload>) => {
    const current = state.form.fields;
    const { customer, region, status } = payload;

    if (customer) {
      const fields = {
        ...current,
        ...customer,
      };

      state.form.fields = fields;
    } else if (region || status) {
      const fields = {
        ...current,
        region: region ? region : null,
        status: status ? status : null,
      };

      state.form.fields = fields;
    } else {
      const fields = {
        ...current,
        ...initialState.form.fields,
      };

      state.form.fields = fields;
    }
  },
  loadCustomers: (
    state: CustomerState,
    { payload }: PayloadAction<{ region?: string; status?: string }>,
  ) => {},
  loadResult: (
    state: CustomerState,
    { payload }: PayloadAction<Customer[]>,
  ) => {
    state.list.items = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  updateCustomer,
  updateCustomerList,
  createCustomerError,
  updateCustomerError,
  setFormField,
  loadCustomers,
  loadResult,
  setForm,
} = slice.actions;

export default slice.reducer;

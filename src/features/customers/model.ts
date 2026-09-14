export interface Customer {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  company: string;
  region: string;
  status: string;
}

export interface CustomerFormFields {
  full_name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  region: string | null;
  status: string | null;
}

export interface CustomerState {
  list: {
    items: Customer[];
  };
  form: {
    fields: CustomerFormFields;
  };
}

export interface FormFieldPayload {
  field: keyof CustomerFormFields;
  value: string;
}

export interface FormPayload {
  customer?: Customer;
  region?: string;
  status?: string;
}

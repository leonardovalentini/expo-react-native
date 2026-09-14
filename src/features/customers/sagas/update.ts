import { put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { set } from "../../../utilities/async_storage";
import { newNotification } from "../../../utilities/notifications";
import { appSelect } from "../../../store/reducers";
import * as actions from "../reducers";
import { navigate } from "../../../navigation/NavigationService";
import { Customer } from "../model";

export function* watchUpdateCustomer(): Generator<any, void, any> {
  yield takeLatest(actions.updateCustomer.toString(), takeUpdateCustomer);
}

export function* takeUpdateCustomer(
  action: PayloadAction<{ id: number }>,
): Generator<any, void, any> {
  try {
    const { id } = action.payload;
    const fields = yield appSelect((state) => state.customers.form.fields);
    const customers: Customer[] = yield appSelect(
      (state) => state.customers.list.items,
    );

    const result = customers.map((customer) => {
      if (customer.id === id) {
        return { ...customer, ...fields };
      }

      return customer;
    });

    yield set("CUSTOMERS_KEY", result);
    yield newNotification({
      title: "Customer Updated",
      body: "The customers list just got updated",
    });

    yield put(actions.updateCustomerList(result));
    navigate("CustomersTab", {
      screen: "DetailsCustomer",
      params: { id },
    });
  } catch (error) {
    yield newNotification({
      title: "Customer Update Fail",
      body: "It was not possible to update the customer.",
    });
    yield put(
      actions.updateCustomerError(
        error instanceof Error ? error.message : String(error),
      ),
    );
  }
}

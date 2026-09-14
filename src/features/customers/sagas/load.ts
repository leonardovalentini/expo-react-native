import { put, delay, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import * as actions from "../reducers";
import { get } from "../../../utilities/async_storage";
import { Customer } from "../model";

export function* watchLoadCustomers(): Generator<any, void, any> {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers(
  action: PayloadAction<{ region?: string; status?: string }>,
): Generator<any, void, any> {
  try {
    const { region, status } = action.payload;

    const customers: Customer[] = yield get("CUSTOMERS_KEY");

    const filteredCustomers = customers.filter(
      (customer) =>
        (region ? customer.region === region : true) &&
        (status ? customer.status === status : true),
    );

    yield put(actions.loadResult(filteredCustomers));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}

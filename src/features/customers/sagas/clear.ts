import { put, takeLatest } from "redux-saga/effects";

import * as actions from "../reducers";
import { set } from "../../../utilities/async_storage";
import { newNotification } from "../../../utilities/notifications";

export function* watchClearCustomerList(): Generator<any, void, any> {
  yield takeLatest(actions.clearCustomerList.toString(), takeClearCustomerList);
}

export function* takeClearCustomerList(): Generator<any, void, any> {
  try {
    yield set("CUSTOMERS_KEY", []);
    yield newNotification({
      title: "The Customers List Was Emptied.",
      body: "No customer information remains stored.",
    });

    yield put(actions.clearCustomerListSuccess());
  } catch (error) {
    yield newNotification({
      title: "Customers Information Deletion Fail",
      body: "It was not possible to empty the customers list.",
    });
    yield put(
      actions.clearCustomerListError(
        error instanceof Error ? error.message : String(error),
      ),
    );
  }
}

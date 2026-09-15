import { all } from "redux-saga/effects";
import { watchLoadCustomers } from "./load";
import { watchCreateCustomer } from "./create";
import { watchUpdateCustomer } from "./update";
import { watchClearCustomerList } from "./clear";

export default function* customer() {
  yield all([
    watchLoadCustomers(),
    watchCreateCustomer(),
    watchUpdateCustomer(),
    watchClearCustomerList(),
  ]);
}

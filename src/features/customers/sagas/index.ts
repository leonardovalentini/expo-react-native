import { all } from "redux-saga/effects";
import { watchLoadCustomers } from "./load";
import { watchCreateCustomer } from "./create";
import { watchUpdateCustomer } from "./update";

export default function* customer() {
  yield all([
    watchLoadCustomers(),
    watchCreateCustomer(),
    watchUpdateCustomer(),
  ]);
}

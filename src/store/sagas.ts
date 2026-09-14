import { all } from "redux-saga/effects";
import customer from "../features/customers/sagas";

export default function* rootSaga() {
  yield all([customer()]);
}

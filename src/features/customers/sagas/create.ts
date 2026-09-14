import { put, takeLatest } from "redux-saga/effects";

import * as actions from "../reducers";
import { set } from "../../../utilities/async_storage";
import { newNotification } from "../../../utilities/notifications";
import { appSelect } from "../../../store/reducers";
import { navigate } from "../../../navigation/NavigationService";

export function* watchCreateCustomer(): Generator<any, void, any> {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer(): Generator<any, void, any> {
  try {
    const fields = yield appSelect((state) => state.customers.form.fields);
    const customers = yield appSelect((state) => state.customers.list.items);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };

    const result = [customer, ...customers];

    yield set("CUSTOMERS_KEY", result);
    yield newNotification({
      title: "New Customer Added",
      body: "The customers list just got longer",
    });

    yield put(actions.updateCustomerList(result));

    navigate("CustomersTab", {
      screen: "DetailsCustomer",
      params: { id: customer.id },
    });
  } catch (error) {
    yield newNotification({
      title: "Customer Cration Fail",
      body: "It was not possible to create the customer.",
    });
    yield put(
      actions.createCustomerError(
        error instanceof Error ? error.message : String(error),
      ),
    );
  }
}

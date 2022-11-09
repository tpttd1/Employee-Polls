/* eslint-disable testing-library/render-result-naming-convention */
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunk));
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Login as/i);
  expect(linkElement).toBeInTheDocument();
});

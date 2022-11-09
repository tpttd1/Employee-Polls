/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "../redux/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

describe("Test component Login", () => {
  it("Test fire event", () => {
    const component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    fireEvent.change(screen.getByTestId("test-select"), {
      target: { value: "sarahedo" },
    });

    expect(store.getState().auth.user).toEqual(undefined);
    expect(component).toMatchSnapshot();
  });
});

/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "../../redux/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Question from ".";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

describe("Test component Question", () => {
  it("Test fire event show done questions", () => {
    const component = render(
      <Provider store={store}>
        <Question />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("btn-show-done"));
    expect(component).toBeTruthy();
  });

  it("Test fire event show new questions", () => {
    const component = render(
      <Provider store={store}>
        <Question />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("btn-show-answer"));
    expect(component).toBeTruthy();
  });
});

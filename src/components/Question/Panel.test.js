/* eslint-disable testing-library/render-result-naming-convention */
import { fireEvent, render, screen } from "@testing-library/react";
import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "../../redux/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Panel from "./Panel";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

describe("Test component Question", () => {
  it("Test fire event show done questions", () => {
    render(
      <Provider store={store}>
        <Panel title="Done" questions={[]} />
      </Provider>
    );

    const title = screen.getByText(/Done/g);
    expect(title).toBeInTheDocument();
  });

  it("Test fire event show new questions", () => {
    render(
      <Provider store={store}>
        <Panel title="New questions" questions={[]} />
      </Provider>
    );

    const title = screen.getByText(/New questions/g);
    expect(title).toBeInTheDocument();
  });
});

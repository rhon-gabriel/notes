import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

describe("With React Testing Library", () => {
  const initialState = [
    { id: "1234", title: "note test", text: "hello world" },
  ];
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('Shows "hello world"', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("hello world")).not.toBeNull();
  });

  it("adds a note", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputTitle = screen.getByTestId("title-input");
    const inputNote = screen.getByTestId("text-input");
    const submitNote = screen.getByTestId("submit-button");
    fireEvent.change(inputTitle, { target: { value: "new title" } });
    fireEvent.change(inputNote, { target: { value: "new note" } });
    fireEvent.click(submitNote);
    expect(screen.getByText("new note")).not.toBeNull();
  });
});

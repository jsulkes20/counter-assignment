import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("renders counter message", () => {
    const message = document.querySelector("h2");
    expect(message).toHaveTextContent("Counter");
  });

  test("should render initial count with value of 0", () => {
    const count = document.querySelector("[data-testid='count']");
    expect(count).toHaveTextContent(0);
  });

  test("clicking + increments the count", () => {
    const count = document.querySelector("[data-testid='count']");
    const incrementBtn = document.querySelector("button:first-of-type");

    fireEvent.click(incrementBtn);
    expect(count).toHaveTextContent(1);

    fireEvent.click(incrementBtn);
    expect(count).toHaveTextContent(2);
  });

  test("clicking - decrements the count", () => {
    const count = document.querySelector("[data-testid='count']");
    const decrementBtn = document.querySelector("button:last-of-type");

    fireEvent.click(decrementBtn);
    expect(count).toHaveTextContent(-1);

    fireEvent.click(decrementBtn);
    expect(count).toHaveTextContent(-2);
  });
});

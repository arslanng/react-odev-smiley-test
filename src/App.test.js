import { act, createEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("tüm emojiler çekildi mi?", () => {
  render(<App />);
  const Emojies = screen.getAllByText("Click to copy emoji");
  expect(Emojies.length).toEqual(20);
});

test("filtreleme", () => {
  render(<App />);
  const input = screen.getByTestId("input");
  const testText = "kiss";
  act(() => {
    userEvent.type(input, testText);
  });
  expect(screen.getAllByText(/Kiss/i).length).toEqual(9);
});

test("kopyaladı mı?", () => {
  render(<App />);
  const listElement = screen.getByText("Grin");

  act(() => {
    userEvent.click(listElement);
  });
  
  const smiley = listElement.parentElement.getAttribute("data-clipboard-text");
  expect(smiley).toMatch("😁")
});

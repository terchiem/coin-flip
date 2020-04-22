import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Counter from './Counter';

it("renders without crashing", function () {
  render(<Counter />);
})

it("matches snapshot", function () {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
})

it("starts with no coin image", function () {
  const { queryByTestId } = render(<Counter />);
  const coin = queryByTestId("coin");
  expect(coin).toBe(null);
});


it("updates results when flipping heads and tails", function () {
  jest.spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);

  const { getByText } = render(<Counter />);
  const button = getByText("Flip Coin");

  // initial results
  getByText("Out of 0 flips. There have been 0 heads and 0 tails.");

  fireEvent.click(button);

  // results after flipping once
  getByText("Out of 1 flips. There have been 0 heads and 1 tails.");

  fireEvent.click(button);

  // results after flipping twice
  getByText("Out of 2 flips. There have been 1 heads and 1 tails.")
})
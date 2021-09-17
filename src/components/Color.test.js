import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

test("Renders without errors with blank color passed into component", () => {
  const testColor = { color: "", code: { hex: "" } };
  render(<Color color={testColor} />);
});

test("Renders the color passed into component", () => {
  const testColor = { color: "hotpink", code: { hex: "#FF69B4" } };
  render(<Color color={testColor} />);
  const displayColor = screen.queryByText("hotpink");
  expect(displayColor).not.toBeNull();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", async () => {
  const testColor = { color: "hotpink", code: { hex: "#FF69B4" } };
  const mockToggleEdit = jest.fn();
  const mockDeleteColor = jest.fn();
  render(
    <Color
      color={testColor}
      toggleEdit={mockToggleEdit}
      deleteColor={mockDeleteColor}
    />
  );
  const xButton = await screen.findByTestId("delete");
  expect(xButton).toBeInTheDocument();
  userEvent.click(xButton);
  await waitFor(() => {
    expect(mockDeleteColor).toBeCalledTimes(1);
    expect(mockToggleEdit).toBeCalledTimes(1);
  });
});

test("Executes setEditColor and toggleEdit property when color div is clicked", async () => {
  const testColor = { color: "hotpink", code: { hex: "#FF69B4" } };
  const mockToggleEdit = jest.fn();
  const mockSetEditColor = jest.fn();
  render(
    <Color
      color={testColor}
      toggleEdit={mockToggleEdit}
      setEditColor={mockSetEditColor}
    />
  );
  const div = await screen.findByTestId("color");
  userEvent.click(div);
  await waitFor(() => {
    expect(mockToggleEdit).toBeCalledTimes(1);
    expect(mockSetEditColor).toBeCalledTimes(1);
  });
});

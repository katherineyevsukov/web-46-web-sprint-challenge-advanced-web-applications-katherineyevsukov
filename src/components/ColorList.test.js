import React from "react";
import MutationObserver from "mutationobserver-shim";
import { mockData } from "./BubblePage.test";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
  const colors = screen.queryAllByTestId("color");
  expect(colors).toHaveLength(0);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={mockData} />);
  const colors = screen.queryAllByTestId("color");
  expect(colors).toHaveLength(3);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList colors={mockData} editing={true} />);
  let editForm = screen.queryByTestId("edit_menu");
  expect(editForm).not.toBeNull();

  rerender(<ColorList colors={mockData} editing={false} />);
  editForm = screen.queryByTestId("edit_menu");
  expect(editForm).toBeNull();
});

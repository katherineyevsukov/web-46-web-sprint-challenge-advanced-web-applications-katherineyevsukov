import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { mockData } from './BubblePage.test'

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';


test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={mockData}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});

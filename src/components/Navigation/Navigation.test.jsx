import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Navigation from "./";

test("Navigation snapshot", () => {
    const view = render(<MemoryRouter><Navigation /></MemoryRouter>);

    expect(view).toMatchSnapshot();
})
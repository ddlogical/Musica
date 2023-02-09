import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import FooterBottom from './';

test("FooterBottom snapshot", () => {

    const view = render(<MemoryRouter><FooterBottom /></MemoryRouter>);
    expect(view).toMatchSnapshot();
})
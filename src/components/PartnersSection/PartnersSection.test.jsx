import { render } from "@testing-library/react";

import PartnersSection from "./";

test("PartnersSection snapshot", () => {

    const view = render(<PartnersSection />);

    expect(view).toMatchSnapshot();
})
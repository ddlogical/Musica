import { render } from "@testing-library/react";

import WelcomeSection from "./";

test("WelcomeSection snapshot", () => {

    const view = render(<WelcomeSection />);

    expect(view).toMatchSnapshot();
})
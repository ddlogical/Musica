import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test.utils";
import '@testing-library/jest-dom';

import CartBtn from '.';

test("Cart shapshot", () => {
    const view = renderWithProviders(<MemoryRouter><CartBtn /></MemoryRouter>, {preloadedState: {
        store: {}
      }});
      expect(view).toMatchSnapshot();
})
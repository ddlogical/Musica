import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test.utils";
import '@testing-library/jest-dom';

import Cart from './';

test("Cart shapshot", () => {
    const view = renderWithProviders(<MemoryRouter><Cart /></MemoryRouter>, {preloadedState: {
        store: {}
      }});
      expect(view).toMatchSnapshot();
})
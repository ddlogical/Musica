import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test.utils";
import '@testing-library/jest-dom';

import PickedOut from './';

test("PickedOut shapshot", () => {
    const view = renderWithProviders(<MemoryRouter><PickedOut /></MemoryRouter>, {preloadedState: {
        store: {}
      }});
      expect(view).toMatchSnapshot();
})
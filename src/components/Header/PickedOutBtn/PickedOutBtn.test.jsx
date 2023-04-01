import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../test.utils";
import '@testing-library/jest-dom';

import PickedOutBtn from '.';

test("PickedOut shapshot", () => {
    const view = renderWithProviders(<MemoryRouter><PickedOutBtn /></MemoryRouter>, {preloadedState: {
        store: {}
      }});
      expect(view).toMatchSnapshot();
})
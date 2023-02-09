import { render } from "@testing-library/react";

import Icon from "./";

test('Icon shapshot', () => {
    const view = render(<Icon type='cart' />)
    expect(view).toMatchSnapshot();
})
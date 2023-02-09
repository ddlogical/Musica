import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from "./";

const onClick = jest.fn();

describe('Button tests', () => {

    test('Button renders', () => {
        render(<Button backgroundColor='#000' text={'Some button'} padding='10px 15px' onClick={onClick}/>)

        expect(screen.getByRole(/button/i)).toBeInTheDocument();
    })

    test('Button contains custom text', () => {
        render(<Button backgroundColor='#000' text={'Some button'} padding='10px 15px' onClick={onClick}/>)

        expect(screen.getByText(/some button/i)).toBeInTheDocument();
    })

    test('Button renders with default text', () => {
        render(<Button backgroundColor='#000' padding='10px 15px' onClick={onClick}/>)

        expect(screen.getByText(/button/i)).toBeInTheDocument();
    })

    test('Button onClick works', () => {
        render(<Button backgroundColor='#000' padding='10px 15px' onClick={onClick}/>)
        fireEvent.click(screen.getByRole(/button/i))
        expect(onClick).toHaveBeenCalled();
    })

    test('Button shapshot', () => {
         const view = render(<Button backgroundColor='#fff' padding='10px 15px' onClick={onClick}/>);
         expect(view).toMatchSnapshot();
    })
});
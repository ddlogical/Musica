import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { ProductsShowContext } from "../../context/ProductsShowContext";

import ProductsShowSwitcher from './';

describe('ProductsShowSwitcher test List', () => {

    const value = {
        tableView: false,
        setTableView: () => jest.fn()
    }

    test('ProductsShowSwitcher renders', () => {

        render(<ProductsShowContext.Provider value={value}><ProductsShowSwitcher /></ProductsShowContext.Provider>);

        expect(screen.getByText(/List/i)).toHaveAttribute('disabled');
        expect(screen.getByText(/Table/i)).not.toHaveAttribute('disabled');

    });

    test('Button Table clicked', () => {

        render(<ProductsShowContext.Provider value={value}><ProductsShowSwitcher /></ProductsShowContext.Provider>);

        fireEvent.click(screen.getByText(/Table/i));

    });

})

describe('ProductsShowSwitcher test Table', () => {

    const value = {
        tableView: true,
        setTableView: () => jest.fn()
    }

    test('ProductsShowSwitcher renders', () => {

        render(<ProductsShowContext.Provider value={value}><ProductsShowSwitcher /></ProductsShowContext.Provider>);

        expect(screen.getByText(/Table/i)).toHaveAttribute('disabled');
        expect(screen.getByText(/List/i)).not.toHaveAttribute('disabled');

    });

    test('Button Table clicked', () => {

        render(<ProductsShowContext.Provider value={value}><ProductsShowSwitcher /></ProductsShowContext.Provider>);

        fireEvent.click(screen.getByText(/List/i));

    });

})
import { screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "../../test.utils";

import Modal from './';


describe('Modal tests', () => {

    test('Add мodal renders', () => {

        renderWithProviders(<Modal />, {preloadedState: {
            modalVisible: true
          }});

        expect(screen.getByRole('heading')).toHaveTextContent(/modal/i);
        expect(screen.getByText(/some modal dummy text/i)).toBeInTheDocument();
        expect(screen.getByText(/add/i)).toBeInTheDocument();
        expect(screen.getByText(/close/i)).toBeInTheDocument();
    });

    test('Cart мodal renders', () => {

        renderWithProviders(<Modal isCart={true} />, {preloadedState: {
            modalVisible: true
          }});

        expect(screen.getByText(/Remove/i)).toBeInTheDocument();
    });

    test('Close X btn renders', () => {

        renderWithProviders(<Modal closeButton={true} />, {preloadedState: {
            modalVisible: true
          }});

        expect(screen.getByTestId('x-btn')).toBeInTheDocument();
        expect(screen.getByTestId('x-btn')).toHaveClass("modal-close-btn");
    });

    test('Btn X clicked - Modal closed', () => {

        renderWithProviders(<Modal closeButton={true} />, {preloadedState: {
            modalVisible: true
          }});

          fireEvent.click(screen.getByTestId('x-btn'));

          expect(screen.queryByTestId('modal-window')).not.toBeInTheDocument();  
    });

    test('Modal header & text changed', () => {

        renderWithProviders(<Modal header="New modal header" text="New modal text" />, {preloadedState: {
            modalVisible: true
          }});

          expect(screen.getByRole('heading')).toHaveTextContent(/new modal header/i);
          expect(screen.getByText(/new modal text/i)).toBeInTheDocument();
    });

})
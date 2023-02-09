import pickedOutReducer, { addToPickedOut, removeFromPickedOut } from './pickedOutSlice';

describe('Test pickedOutReducer', () => {

    test('should return the initial state', () => {
        expect(pickedOutReducer(undefined, { type: undefined })).toEqual([])
    })

    test('addToPickedOut should add new customProduct to pickedOut', () => {

        const initialState = [{ productName: "Product1", productPrice: 12 }];
        const customProduct = { productName: "Product2", productPrice: 14 };
        expect(pickedOutReducer(initialState, addToPickedOut(customProduct))).toEqual([
            { productName: "Product1", productPrice: 12 },
            { productName: "Product2", productPrice: 14 }
        ]);

    })

    test('addToPickedOut should remove selected product from pickedOut', () => {

        const initialState = [
            { productName: "Product1", productPrice: 12 },
            { productName: "Product2", productPrice: 10 },
            { productName: "Product3", productPrice: 4 }
        ];

        expect(pickedOutReducer(initialState, removeFromPickedOut(1)))
            .toEqual([
                { productName: "Product1", productPrice: 12 },
                { productName: "Product3", productPrice: 4 }
            ]);
            
    })

})
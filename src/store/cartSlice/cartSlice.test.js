import cartSliceReducer, { addToCart, removeFromCart, removeAllFromCart } from './cartSlice';

describe('Test cartSliceReducer', () => {

    test('should return the initial state', () => {
        expect(cartSliceReducer(undefined, { type: undefined })).toEqual([])
    })

    test('addToCart should add new customProduct to cart', () => {
        const initialState = [];
        const customProduct = { productName: "Product1", productPrice: 12 };
        expect(cartSliceReducer(initialState, addToCart(customProduct))).toEqual([{ productName: "Product1", productPrice: 12 }]);
    })

    test('removeFromCart should remove selected product from cart', () => {
        const initialState = [
            { productName: "Product1", productPrice: 12 },
            { productName: "Product2", productPrice: 10 },
            { productName: "Product3", productPrice: 4 }
        ];
        expect(cartSliceReducer(initialState, removeFromCart(1)))
            .toEqual([
                { productName: "Product1", productPrice: 12 },
                { productName: "Product3", productPrice: 4 }
            ]);
    })

    test('removeAllFromCart should remove all products from cart', () => {
        const initialState = [
            { productName: "Product1", productPrice: 12 },
            { productName: "Product2", productPrice: 10 },
            { productName: "Product3", productPrice: 4 }
        ];
        expect(cartSliceReducer(initialState, removeAllFromCart())).toEqual([]);
    })


})
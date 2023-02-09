import activeProductReducer, {activeProductChanged} from './activeProductSlice';

describe('Test activeProductReducer', () => {

    test('should return the initial state', () => {
        expect(activeProductReducer(undefined, {type: undefined})).toEqual({})
    })
    
    test('activeProductChanged should change initial state value to customProduct', () => {
        const previousState = {};
        const customProduct = {productName: "Product1", productPrice: 12};
        expect(activeProductReducer(previousState, activeProductChanged(customProduct))).toEqual({productName: "Product1", productPrice: 12});
    })
})

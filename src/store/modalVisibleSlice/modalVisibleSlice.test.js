import modalVisibleReducer, { modalVisibleChanged } from './modalVisibleSlice';

describe('Test modalVisibleReducer', () => {

    test('should return the initial state', () => {
        expect(modalVisibleReducer(undefined, {type: undefined})).toEqual(false)
    })
    
    test('modalVisibleChanged should revert initial state value', () => {

        const previousStateOne = false;
        const previousStateTwo = true;

        expect(modalVisibleReducer(previousStateOne, modalVisibleChanged())).toEqual(true);
        expect(modalVisibleReducer(previousStateTwo, modalVisibleChanged())).toEqual(false);

    })
})

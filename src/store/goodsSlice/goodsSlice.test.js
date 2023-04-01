
import goodsSliceReducer, { loadGoods } from './goodsSlice';

describe('Test goodsSliceReducer', () => {

    test('should return the initial state', () => {
        expect(goodsSliceReducer(undefined, { type: undefined })).toEqual({
            loading: null,
            products: [],
            error: ''
        })
    })

    test('creates the action types', () => {

        expect(loadGoods.fulfilled.type).toBe('goods/loadGoods/fulfilled')
        expect(loadGoods.pending.type).toBe('goods/loadGoods/pending')
        expect(loadGoods.rejected.type).toBe('goods/loadGoods/rejected')
        
    })

})
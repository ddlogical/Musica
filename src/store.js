import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import goodsReduser from "./features/goodsSlice/goodsSlice";
import modalVisibleReducer from "./features/modalVisibleSlice/modalVisibleSlice";
import cartReducer from "./features/cartSlice/cartSlice";
import pickedOutReducer from "./features/pickedOutSlice/pickedOutSlice";
import activeProductReducer from "./features/activeProductSlice/activeProductSlice";

const storeReducer = combineReducers({
    cart: cartReducer,
    pickedOut: pickedOutReducer,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, storeReducer);

const store = configureStore({
    reducer: {
        store: persistedReducer,
        goods: goodsReduser,
        modalVisible: modalVisibleReducer,
        activeProduct: activeProductReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

// for testing
export const setupStore = preloadedState => {
    return configureStore({
        reducer: {
            store: persistedReducer,
            goods: goodsReduser,
            modalVisible: modalVisibleReducer,
            activeProduct: activeProductReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        preloadedState
    });
  }

export const persistor = persistStore(store);

export default store;
import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import AppLayout from './routes/AppLayout';
import Home from './routes/Home';
import CartRoute from './routes/CartRoute';
import PickedOutRoute from './routes/PickedOutRoute';
import ErrorPage from './routes/ErrorPage';
import { loadGoods } from './features/goodsSlice/goodsSlice';

function App() {

    const dispatch = useDispatch();
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Navigate to='shop' replace />
                },
                {
                    path: 'shop',
                    element: <Home />
                },
                {
                    path: 'cart',
                    element: <CartRoute />
                },
                {
                    path: 'picked-out',
                    element: <PickedOutRoute />
                }
            ]
        }
    ]);

    useEffect(() => {

        dispatch(loadGoods());

    }, [dispatch])

    return <RouterProvider router={router} />;
}

export default App;

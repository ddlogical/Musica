import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { loadGoods } from "./store/goodsSlice/goodsSlice";
import { router } from "./routes";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(loadGoods());

    }, [dispatch])

    return <RouterProvider router={router} />;
}

export default App;

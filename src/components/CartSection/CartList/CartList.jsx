import "./CartList.scss";
import Product from "../../Product";
import { shallowEqual, useSelector } from "react-redux";
import { memo } from "react";

function CartList() {

    const cart = useSelector(state => state.store.cart, shallowEqual);

    return (
        <div className="cart-section__list">
            {cart.map((element, id) => {
                const { color, imgSrc, name, price, productCode, text } = element;
                return <Product key={id} id={id} isCart={true} color={color} imgSrc={imgSrc} name={name} price={price} productCode={productCode} text={text} />
            })}
        </div>
    );
}


export default memo(CartList);
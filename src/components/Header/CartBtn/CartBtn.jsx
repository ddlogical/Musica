import "./CartBtn.scss";
import { Link } from "react-router-dom";
import Icon from '../../Icon';
import {shallowEqual, useSelector } from "react-redux";
import { memo } from 'react';

function CartBtn() {

    const cartLength = useSelector(state => state.store.cart.length, shallowEqual);

    return (
        <Link to="/cart" className='cart-btn'>

            <Icon color="#fff" type="cart" />
            {cartLength > 0 && (<span>{cartLength}</span>)}
        </Link>
    );
}

export default memo(CartBtn);
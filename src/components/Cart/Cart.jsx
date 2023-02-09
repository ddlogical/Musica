import "./Cart.scss";
import { Link } from "react-router-dom";
import Icon from '../Icon';
import {shallowEqual, useSelector } from "react-redux";
import { memo } from 'react';

function Cart() {

    const cartLength = useSelector(state => state.store.cart.length, shallowEqual);

    return (
        <Link to="/cart" className='cart'>

            <Icon color="#fff" type="cart" />
            <span>({cartLength})</span>
        </Link>
    );
}

export default memo(Cart);
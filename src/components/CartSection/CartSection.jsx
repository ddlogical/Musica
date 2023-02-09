import "./CartSection.scss";
import CartList from '../CartList';
import { shallowEqual, useSelector } from "react-redux";
import BuyForm from "../BuyForm/BuyForm";
import { memo } from 'react';

function CartSection() {

    const cartLength = useSelector(state => state.store.cart.length, shallowEqual);

    return (
        <section className='cart-section'>

            <div className='container'>

                <div className='cart-section__content'>
                    <h2>Cart</h2>
                    {
                        cartLength > 0
                            ?
                            <div className='cart-section__cart'>
                                <CartList />
                                <BuyForm />
                            </div>
                            :
                            <p className='cart-section__no-items'>No items has been added.</p>
                    }
                </div>
            </div>

        </section>
    );
}

export default memo(CartSection);
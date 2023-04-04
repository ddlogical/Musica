import "./Product.scss";
import Button from '../Button/Button';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { modalVisibleChanged } from "../../store/modalVisibleSlice/modalVisibleSlice";
import { addToPickedOut } from "../../store/pickedOutSlice/pickedOutSlice";
import { removeFromPickedOut } from "../../store/pickedOutSlice/pickedOutSlice";
import { activeProductChanged } from "../../store/activeProductSlice/activeProductSlice";
import { memo } from 'react';

function Product(props) {

    const dispatch = useDispatch();
    const pickedOut = useSelector(state => state.store.pickedOut, shallowEqual);

    const { id, isCart, color, imgSrc, name, price, productCode, text, active } = props;

    const activeProduct = { color, imgSrc, name, price, productCode, text };

    const activeProductRemove = {id, color, imgSrc, name, price, productCode, text };

    const priceCustomStyle = {
        color: color,
    }

    const [isPickedOut, setIsPickedOut] = useState(false);

    const clickPickedOutHandler = () => {
        if (isPickedOut) {
            const index = pickedOut.map(e => e.productCode).indexOf(productCode);
            dispatch(removeFromPickedOut(index));
        } else {
            if (!pickedOut.find(e => e.productCode === productCode)) {
                dispatch(addToPickedOut(activeProduct))
            }
        }
        setIsPickedOut(!isPickedOut);
    }

    const clickAddToCartHandler = () => {
        dispatch(modalVisibleChanged());
        dispatch(activeProductChanged(activeProduct));
    }
   
    const clickRemoveFromCartHandler = () => {
        dispatch(modalVisibleChanged());
        dispatch(activeProductChanged(activeProductRemove));
    }

    useEffect(() => {

        const root = JSON.parse(localStorage.getItem('persist:root'));
        const pickedOutProducts = JSON.parse(root.pickedOut);
        
        if (pickedOutProducts.find(e => e.productCode === productCode)) {
            setIsPickedOut(true);
        }
    }, [productCode])


    return (
        <div className={active ? 'product product--active': 'product'}>
            <img className='product__img' src={imgSrc} alt={`Product ${productCode}`} />
            <div className='product__content'>
                <h4 className='product__heading'>{name}</h4>
                <p className='product__text'>{text}</p>
                <div className='product__add'>
                    <span className='product__price' style={priceCustomStyle}>{price}</span>
                    {!isCart
                        ?
                        <Button backgroundColor="#1e1e20" padding="9px 5px" text='Add to cart' onClick={clickAddToCartHandler} />
                        :
                        <Button backgroundColor="#1e1e20" padding="9px 8px" text='Remove' onClick={clickRemoveFromCartHandler} />
                    }
                </div>
                {
                    !isCart &&
                    <button className='product__picked-out' onClick={clickPickedOutHandler}>
                        {isPickedOut
                            ?
                            <Icon color="#cc3333" type="star-fill" />
                            :
                            <Icon color="#cc3333" type="star" />
                        }
                    </button>
                }

            </div>
        </div>
    );
}


Product.propTypes = {
    id: PropTypes.number,
    isCart: PropTypes.bool,
    color: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.string,
    productCode: PropTypes.string.isRequired,
    text: PropTypes.string,
	 active: PropTypes.bool,
}

Product.defaultProps = {
    isCart: false,
    color: '#1e1e20',
    name: 'Some product on sale',
    price: '$0.00',
    text: 'Some dummy product text',
	 active: false
}

export default memo(Product);
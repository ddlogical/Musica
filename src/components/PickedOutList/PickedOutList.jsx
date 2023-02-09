import "./PickedOutList.scss";
import Product from '../Product';
import { shallowEqual, useSelector } from "react-redux";
import { memo } from 'react';

function PickedOutList() {

    const pickedOut = useSelector(state => state.store.pickedOut, shallowEqual);
    
    return (
        <div className='picked-out-section__list'>
            {pickedOut.map(element => {
                const { color, imgSrc, name, price, productCode, text } = element;
                return <Product key={productCode} color={color} imgSrc={imgSrc} name={name} price={price} productCode={productCode} text={text} />
            })}
        </div>
    );
}


export default memo(PickedOutList);
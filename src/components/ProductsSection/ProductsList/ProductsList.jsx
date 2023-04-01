import "./ProductsList.scss";
import { shallowEqual, useSelector } from "react-redux";
import Product from '../../Product';
import { memo } from 'react';

function ProductsList() {

    const goods = useSelector(state => state.goods.products, shallowEqual);
   
    return (
        <div className='products__list'>
            {goods.map(element => {
                const { color, imgSrc, name, price, productCode, text } = element;
                return <Product key={productCode} color={color} imgSrc={imgSrc} name={name} price={price} productCode={productCode} text={text} />
            })}
        </div>
    );
}


export default memo(ProductsList);
import "./ProductsTable.scss";
import { shallowEqual, useSelector } from "react-redux";
import ProductsRow from "./ProductsRow";
import { memo } from "react";

function ProductsTable() {

    const goods = useSelector(state => state.goods.products, shallowEqual);

    return (
        <table className='products__table'>
            <tbody>

                {goods.map((element, index) => {
                    const { color, imgSrc, name, price, productCode, text } = element;
                    return <ProductsRow key={productCode} id={index + 1} color={color} imgSrc={imgSrc} name={name} price={price} productCode={productCode} text={text} />
                })}

            </tbody>

        </table>
    );
}


export default memo(ProductsTable);
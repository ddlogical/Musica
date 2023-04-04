import "./MusicList.scss";
import { shallowEqual, useSelector } from "react-redux";
import Product from "../../Product";
import { memo } from "react";

function MusicList() {

    const goods = useSelector(state => state.goods.products, shallowEqual);
	 // eslint-disable-next-line no-unused-vars
	 const musicActiveAlbum = useSelector(state => state.musicActiveAlbum, shallowEqual);
    return (
        <div className='music__list'>
            {goods.map(element => {
                const { color, imgSrc, name, price, productCode, text } = element;
                return <Product key={productCode} color={color} imgSrc={imgSrc} name={name} price={price} productCode={productCode} text={text} active={musicActiveAlbum === productCode ? true : false}/>
            })}
        </div>
    );
}


export default memo(MusicList);
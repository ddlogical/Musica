import { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import './ProductsRow.scss';
import Button from '../../../Button/Button';
import Icon from '../../../Icon';
import PropTypes from 'prop-types';
import { addToPickedOut } from "../../../../store/pickedOutSlice/pickedOutSlice";
import { removeFromPickedOut } from "../../../../store/pickedOutSlice/pickedOutSlice";
import { modalVisibleChanged } from "../../../../store/modalVisibleSlice/modalVisibleSlice";
import { activeProductChanged } from "../../../../store/activeProductSlice/activeProductSlice";
import { memo } from 'react';

function ProductsRow(props) {

	const dispatch = useDispatch();
	const pickedOut = useSelector(state => state.store.pickedOut, shallowEqual);

	const { id, color, imgSrc, name, price, productCode, text } = props;

	const activeProduct = { color, imgSrc, name, price, productCode, text };

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

	useEffect(() => {

		const root = JSON.parse(localStorage.getItem('persist:root'));
		const pickedOutProducts = JSON.parse(root.pickedOut);

		if (pickedOutProducts.find(e => e.productCode === productCode)) {
			setIsPickedOut(true);
		}
	}, [productCode])

	return (
		<tr className="products__row">
			<td>
				<span className='product__text product__text--cell'>{id}</span>
			</td>
			<td>
				<img className='product__img product__img--cell' src={imgSrc} alt={`Product ${productCode}`} />
			</td>
			<td>
				<span className='product__text product__text--cell'>{name}</span>
			</td>
			<td>
				<span className='product__price product__price--cell' style={priceCustomStyle}>{price}</span>
			</td>
			<td>
				<button className='product__picked-out product__picked-out--cell' onClick={clickPickedOutHandler}>
					{isPickedOut
						?
						<Icon color="#cc3333" type="star-fill" />
						:
						<Icon color="#cc3333" type="star" />
					}
				</button>
			</td>
			<td>
				<Button backgroundColor="#1e1e20" padding=".9rem .5rem" text='Add to cart' onClick={clickAddToCartHandler} />
			</td>
		</tr>
	);
}

ProductsRow.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	name: PropTypes.string,
	price: PropTypes.string,
	productCode: PropTypes.string.isRequired,
	text: PropTypes.string,
}

ProductsRow.defaultProps = {
	color: '#1e1e20',
	name: 'Some product on sale',
	price: '$0.00',
	text: 'Some dummy product text'
}


export default memo(ProductsRow);
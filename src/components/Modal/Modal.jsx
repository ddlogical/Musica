import './Modal.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { modalVisibleChanged } from '../../features/modalVisibleSlice/modalVisibleSlice';
import { addToCart } from '../../features/cartSlice/cartSlice';
import { removeFromCart } from '../../features/cartSlice/cartSlice';
import { activeProductChanged } from '../../features/activeProductSlice/activeProductSlice';
import { memo } from 'react';

function Modal(props) {

    const dispatch = useDispatch();
    const visible = useSelector(state => state.modalVisible, shallowEqual);
    const activeProduct = useSelector(state => state.activeProduct, shallowEqual);
    const { isCart, header, text, closeButton } = props;

    const clickCloseHandler = () => {
        dispatch(modalVisibleChanged());
        dispatch(activeProductChanged({}));
    }

    const clickAddHandler = () => {
        dispatch(addToCart(activeProduct))
        dispatch(modalVisibleChanged());
        dispatch(activeProductChanged({}));
    }

    const removeFromCartHandler = () => {
        dispatch(removeFromCart(activeProduct.id));
        dispatch(modalVisibleChanged());
        dispatch(activeProductChanged({}));
    }

    return visible ? (
        <div data-testid="modal-window" className='modal' onClick={clickCloseHandler}>
            <div className='modal-content' onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className='modal-top'>
                    <h2 className='modal-header'>{header}</h2>
                </div>
                <div className='modal-bottom'>
                    <p className='modal-text'>{text}</p>
                    <div className='modal-button-container'>

                        {
                            !isCart
                                ?
                                <Button backgroundColor="#1e1e20" padding="1.3rem 3.3rem" text='Add' onClick={clickAddHandler} />
                                :
                                <Button backgroundColor="#1e1e20" padding="1.3rem 2.5rem" text='Remove' onClick={removeFromCartHandler} />
                        }

                        <Button backgroundColor="#1e1e20" padding="1.3rem 2.7rem" text='Close' onClick={clickCloseHandler} />

                    </div>
                </div>
                {closeButton && <button data-testid="x-btn" className='modal-close-btn' onClick={clickCloseHandler}></button>}
            </div>
        </div>
    ) : null;
}


Modal.propTypes = {
    isCart: PropTypes.bool,
    header: PropTypes.string,
    text: PropTypes.string,
    closeButton: PropTypes.bool,
}

Modal.defaultProps = {
    isCart: false,
    header: "Modal",
    text: 'Some modal dummy text',
    closeButton: false
}

export default memo(Modal);
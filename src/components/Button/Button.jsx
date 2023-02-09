import './Button.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';

function Button(props) {

    const { backgroundColor, padding, text, onClick } = props;

    const buttonCustomStyle = {
        backgroundColor: backgroundColor,
        padding: padding
    }

    const clickHandler = (e) => {
        onClick(e.target.innerText)
    }

    return (
        <button className='button' style={buttonCustomStyle} onClick={clickHandler}>{text}</button>
    );
}


Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
}

Button.defaultProps = {
    text: 'Button'
}


export default memo(Button);
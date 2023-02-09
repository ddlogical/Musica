import "./PickedOut.scss";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Icon from '../Icon';
import { memo } from 'react';

function PickedOut() {
    
    const pickedOutLength = useSelector(state => state.store.pickedOut.length, shallowEqual);

    return (
        <Link to='/picked-out' className='picked-out'>

            <Icon color="#fff" type="star-fill" />
            <span>({pickedOutLength})</span>
        </Link>
    );
}


export default memo(PickedOut);
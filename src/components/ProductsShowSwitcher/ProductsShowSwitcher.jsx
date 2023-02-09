import { useContext } from 'react';
import { ProductsShowContext } from '../../context/ProductsShowContext';
import './ProductsShowSwitcher.scss';
import { memo } from 'react';

function ProductsShowSwitcher() {

    const {tableView, setTableView} = useContext(ProductsShowContext);

    const clickHandler = (e) => {
        setTableView({type: e.target.innerText})
    }

    const productsListBtnClickable = <div className='products__show-switcher'>

        <button className='products__show-btn products__show-btn--list' onClick={clickHandler}>List</button>
        <button className='products__show-btn products__show-btn--table' disabled>Table</button>

    </div>;

    const productsTableBtnClickable = <div className='products__show-switcher'>

        <button className='products__show-btn products__show-btn--list' disabled>List</button>
        <button className='products__show-btn products__show-btn--table' onClick={clickHandler}>Table</button>

    </div>;

    return (
        tableView
        ?
        productsListBtnClickable
        :
        productsTableBtnClickable
    );
}

export default memo(ProductsShowSwitcher);
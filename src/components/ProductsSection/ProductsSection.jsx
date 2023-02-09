import "./ProductsSection.scss";
import ProductsList from '../ProductsList';
import ProductsTable from "../ProductsTable";
import { ProductsShowContext } from "../../context/ProductsShowContext";
import ProductsShowSwitcher from "../ProductsShowSwitcher";
import { useReducer, useMemo } from "react";
import { memo } from 'react';

function ProductsSection() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "List": return false
            case "Table": return true
            default: return state
        }
    }

    const [tableView, setTableView] = useReducer(reducer, false);

    const value = useMemo(
        () => ({ tableView, setTableView }),
        [tableView]
    )

    return (
        <ProductsShowContext.Provider value={value}>
            <section className='products'>

                <div className='container'>

                    <div className='products__content'>
                        <h2>Albums Currently on sale</h2>

                        <ProductsShowSwitcher />

                        {
                            tableView
                            ?
                            <ProductsTable />
                            :
                            <ProductsList />
                        }
                        
                    </div>
                </div>

            </section>
        </ProductsShowContext.Provider>

    );
}

export default memo(ProductsSection);
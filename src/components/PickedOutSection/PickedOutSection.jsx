import "./PickedOutSection.scss";
import PickedOutList from "./PickedOutList";
import { shallowEqual, useSelector } from "react-redux";
import { memo } from "react";

function PickedOutSection() {

    const pickedOutLength = useSelector(state => state.store.pickedOut.length, shallowEqual);

    return (
        <section className='picked-out-section'>

            <div className='container'>

                <div className='picked-out-section__content'>
                    <h2>Picked Out</h2>
                    {
                        pickedOutLength > 0
                            ?
                            <PickedOutList />
                            :
                            <p className='picked-out-section__no-items'>No items have been added.</p>
                    }
                </div>
            </div>

        </section>
    );
}


export default memo(PickedOutSection);
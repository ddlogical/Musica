import PickedOutSection from "../components/PickedOutSection/PickedOutSection";
import Modal from "../components/Modal/Modal";

function PickedOutRoute() {

    return (
        <>

            <main className='main'>

                <PickedOutSection />

            </main>

            <Modal header="Add this product to cart?" text="You can add this product to cart or undo adding by closing the window." />
        </>
    );

}

export default PickedOutRoute;
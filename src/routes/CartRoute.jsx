import CartSection from "../components/CartSection";
import Modal from "../components/Modal/Modal";

function CartRoute() {

    return (
        <>

            <main className='main'>

                <CartSection />

            </main>

            <Modal isCart={true} header="Remove this product from cart?" text="You can remove this product from cart or undo removing by closing the window." />
        </>
    );

}

export default CartRoute;
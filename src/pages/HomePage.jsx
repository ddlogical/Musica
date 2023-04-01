import CarouselSection from "../components/CarouselSection";
import WelcomeSection from "../components/WelcomeSection";
import ProductsSection from "../components/ProductsSection";
import PartnersSection from "../components/PartnersSection";
import Modal from "../components/Modal/Modal";

function HomePage(props) {

    return (
        <>

            <main className='main'>

                <CarouselSection />

                <WelcomeSection />

                <ProductsSection />

                <PartnersSection />

            </main>

            <Modal header="Add this product to cart?" text="You can add this product to cart or undo adding by closing the window." />
        </>
    );

}

export default HomePage;
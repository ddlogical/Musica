import WelcomeSection from "../components/WelcomeSection";
import Modal from "../components/Modal/Modal";
import MusicSection from "../components/MusicSection";

function ListenPage() {

	return (

		<>

			<main className='main'>

				<WelcomeSection page="listen" text="listen before purchase" />

				<MusicSection />

			</main>

			<Modal header="Add this product to cart?" text="You can add this product to cart or undo adding by closing the window." />

		</>


	);

}

export default ListenPage;
import WelcomeSection from "../components/WelcomeSection";
import EventsSection from "../components/EventsSection/EventsSection";

function EventsPage() {

	return (

			<main className='main'>

				<WelcomeSection page="events" text="watch upcoming events" />

				<EventsSection />

			</main>


	);

}

export default EventsPage;
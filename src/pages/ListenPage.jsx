import WelcomeSection from "../components/WelcomeSection";
import Player from "../components/Player/Player";

function ListenPage() {

    return (

            <main className='main'>

                <WelcomeSection page="listen" text="listen before purchase"/>

					 <Player />

            </main>
    );

}

export default ListenPage;
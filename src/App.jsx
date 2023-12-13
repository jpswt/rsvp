import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Rsvp from './components/Rsvp';
import Story from './components/Story';
import Venue from './components/Venue';

function App() {
	return (
		<div className=" w-[100%] overflow-hidden">
			<Navbar />
			<Hero />
			<Countdown />
			<Couple />
			<Hero2 />
			<Story />
			<Venue />
			<Gallery />
			<Rsvp />
			<Gift />
			<Footer />
		</div>
	);
}

export default App;

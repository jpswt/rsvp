import Banner from './Banner';
import VenueCard from './VenueCard';

const Venue = () => {
	return (
		<div className="m-auto max-w-[1200px]">
			<Banner title="Venue & Lodging" idName="venue" />
			<VenueCard
				id={0}
				url="https://www.spinellisvistro.com/wp-content/uploads/2023/09/21231635_1119730958160838_4205099644467485412_n-1.webp"
				title="Wedding Venue"
				date="Saturday April 13, 2023 4:00PM"
				address="Spinelli's Wedding Venue, Fifth Street, Comfort, TX"
				info="Wedding Ceremony begins at 4:00PM followed by a reception."
				directions_url="https://maps.app.goo.gl/dCjtEktbRQdXyjWf7"
				hotel_url="https://www.spinellisvistro.com/"
			/>
			<VenueCard
				id={1}
				url="https://cache.marriott.com/content/dam/marriott-renditions/SATSN/satsn-suite-0009-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
				title="SpringHill Suites by Marriott"
				date=""
				address="18119 Talavera Ridge, San Antonio, TX 78257"
				info="Travel in style at SpringHill Suites by Marriott San Antonio Northwest at The RIM just minutes from Six Flags Fiesta Texas. Our all-suite hotel seamlessly blends design and functionality, offering modern amenities to keep you refreshed and focused, all at an affordable price!"
				directions_url="https://maps.app.goo.gl/kaYMHU8qWtY7BALB6"
				hotel_url="https://www.marriott.com/en-us/hotels/satsn-springhill-suites-san-antonio-northwest-at-the-rim/overview/"
			/>
			<VenueCard
				id={1}
				url="https://www.hilton.com/im/en/SATRPGI/10939095/25-satrpgi-hilton-garden-inn-san-antonio-at-the-rim-king-bed.jpg?impolicy=crop&cw=4495&ch=2690&gravity=NorthWest&xposition=0&yposition=154&rw=528&rh=316"
				title="Hilton Garden Inn San Antonio at The Rim"
				date=""
				address="5730 Rim Pass, San Antonio, TX 78257"
				info="Off I-10, we're next to The RIM complex – home to shopping, restaurants, Topgolf, and the Santikos Palladium theater. Our free shuttle covers destinations within five miles, including Six Flags Fiesta Texas and the University of Texas at San Antonio. Our 24-hour Pavilion Pantry offers drinks, snacks, and ready-to-cook meals."
				directions_url="https://maps.app.goo.gl/XNMcRzqBcJAfuLHD8"
				hotel_url="https://www.hilton.com/en/hotels/satrpgi-hilton-garden-inn-san-antonio-at-the-rim/"
			/>
		</div>
	);
};
export default Venue;

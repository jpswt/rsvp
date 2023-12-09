import Banner from './Banner';
import VenueCard from './VenueCard';

const Venue = () => {
	return (
		<div className="max-w-[1200px] m-auto">
			<Banner title="Venue" idName="venue" />
			<VenueCard
				id={0}
				url="https://images.unsplash.com/photo-1522143296900-b2c450f80fa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjBjZXJlbW9ueXxlbnwwfDB8MHx8fDA%3D"
				title="Wedding Ceremony"
				date="Saturday April 14, 2023 4:00PM"
				address="Spinelli's Wedding Venue, Fifth Street, Comfort, TX"
				info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores fugit aliquid soluta in, quidem animi nulla explicabo aut repudiandae."
			/>
			<VenueCard
				id={1}
				url="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				title="Hotel Information"
				date="Saturday April 14, 2023 4:00PM"
				address="Holdiay Inn "
				info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores fugit aliquid soluta in, quidem animi nulla explicabo aut repudiandae."
			/>
		</div>
	);
};
export default Venue;

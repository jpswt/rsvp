import Button from './Button';

const VenueCard = ({ id, url, title, date, address, info }) => {
	console.log(id);
	return (
		<section
			className={
				id === 0
					? 'mt-10 flex px-4 md:px-20 lg:px-4 xl:px-0 flex-col lg:flex-row'
					: 'mt-10 flex px-4 md:px-20 lg:px-4 xl:px-0 flex-col lg:flex-row-reverse'
			}
		>
			<img src={url} alt={title} className=" w-full lg:max-w-[37%]" />
			<div className="bg-primary bg-opacity-20 text-gray-500 font-nav p-6">
				<h2 className="text-secondary font-cursive text-4xl mb-4">{title}</h2>
				<p>{date}</p>
				<p className="mb-4">{address}</p>
				<p className="mb-6">{info}</p>
				<Button url="https://maps.app.goo.gl/dCjtEktbRQdXyjWf7" target="_blank">
					Directions
				</Button>
			</div>
		</section>
	);
};
export default VenueCard;

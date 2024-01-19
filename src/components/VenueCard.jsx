import Button from './Button';

const VenueCard = ({
	id,
	url,
	title,
	date,
	address,
	info,
	directions_url,
	hotel_url,
}) => {
	return (
		<section
			className={
				id === 0
					? 'mt-10 flex flex-col px-4 md:px-20 lg:flex-row lg:px-4 xl:px-0'
					: 'mt-10 flex flex-col px-4 md:px-20 lg:flex-row-reverse lg:px-4 xl:px-0'
			}
		>
			<img src={url} alt={title} className=" w-full lg:max-w-[37%]" />
			<div className="w-full bg-primary bg-opacity-20 p-6 font-nav text-gray-500">
				<h2
					className={
						id === 0
							? 'mb-4 font-cursive text-4xl text-secondary'
							: 'mb-4 font-nav text-3xl text-gray-500'
					}
				>
					{title}
				</h2>
				<p>{date}</p>
				<p className="mb-4">{address}</p>
				<p className="mb-6">{info}</p>
				<div className=" flex gap-2">
					<Button url={directions_url} target="_blank">
						Directions
					</Button>

					<Button url={hotel_url} target="_blank">
						{id === 0 ? 'Venue Info' : 'Hotel Info'}
					</Button>
				</div>
			</div>
		</section>
	);
};
export default VenueCard;

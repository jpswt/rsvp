import { useEffect, useState } from 'react';

const StoryCard = ({ url, date, title, text }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 768;
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className=" h-full w-full border-[#aec6cf] p-6 text-4xl transition duration-500 ease-out hover:bg-primary hover:bg-opacity-20 hover:duration-500 hover:ease-in-out ">
			<img src={url} alt="" />
			<p
				style={
					width < breakpoint
						? { fontSize: '30px', margin: '20px 0 0px 0' }
						: { fontSize: '40px', margin: '20px 0 0px 0' }
				}
				className="font-cursive text-secondary"
			>
				{title}
			</p>
			<p
				style={
					width < breakpoint
						? { fontSize: '15px', margin: '0px' }
						: { fontSize: '16px', margin: '0px' }
				}
				className=" font-nav text-9xl text-gray-500"
			>
				{date}
			</p>
			<p
				style={width < breakpoint ? { fontSize: '18px' } : { fontSize: '16px' }}
				className=" mt-5 font-nav text-gray-500 "
			>
				{text}
			</p>
		</div>
	);
};
export default StoryCard;

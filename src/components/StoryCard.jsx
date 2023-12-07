const StoryCard = ({ url, date, title, text }) => {
	return (
		<div className=" border-[#aec6cf] w-full h-full p-6 hover:bg-primary hover:ease-in-out hover:duration-500 hover:bg-opacity-20 transition duration-500 ease-out">
			<img src={url} alt="" />
			<p
				style={{ fontSize: '40px', margin: '20px 0 0px 0' }}
				className="text-secondary font-cursive"
			>
				{' '}
				{title}
			</p>
			<p style={{ margin: '0' }} className=" font-nav text-gray-500">
				{date}
			</p>
			<p className=" font-nav text-gray-500 mt-5 ">{text}</p>
		</div>
	);
};
export default StoryCard;

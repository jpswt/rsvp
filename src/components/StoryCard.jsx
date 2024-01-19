const StoryCard = ({ url, date, title, text }) => {
	return (
		<div className=" h-full w-full border-[#aec6cf] p-6 transition duration-500 ease-out hover:bg-primary hover:bg-opacity-20 hover:duration-500 hover:ease-in-out">
			<img src={url} alt="" />
			<p
				style={{ fontSize: '40px', margin: '20px 0 0px 0' }}
				className="font-cursive text-secondary"
			>
				{title}
			</p>
			<p style={{ margin: '0' }} className=" font-nav text-gray-500">
				{date}
			</p>
			<p className=" mt-5 font-nav text-gray-500 ">{text}</p>
		</div>
	);
};
export default StoryCard;

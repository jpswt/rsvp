import heartBanner from '../assets/images/heart-banner.png';

const Banner = ({ title, idName }) => {
	return (
		<div>
			<div id={idName} className=" pt-[60px] mt-[-30px]"></div>
			<div className="w-full flex flex-col items-center justify-center font-cursive text-secondary text-4xl mt-10">
				<p className=" text-5xl pb-1">{title}</p>
				<img src={heartBanner} alt="" />
			</div>
		</div>
	);
};
export default Banner;

import HeroHeart from '../assets/images/HeroHeart.png';

const Hero = () => {
	return (
		<div
			className="relative h-screen w-screen bg-left-4 md:bg-right-4 bg-hero bg-cover bg-no-repeat"
			id="home"
		>
			<div className=" absolute inset-0 bg-gray-800 opacity-50"></div>

			<div className="flex items-center justify-center h-full">
				<div className="relative">
					<img
						src={HeroHeart}
						alt=""
						className="w-[25rem] lg:w-[36rem] opacity-90  "
					/>
					<div className="absolute top-36 left-16  lg:top-56 lg:left-28 flex flex-col items-center justify-center gap-6">
						<p className="text-primary font-nav text-xl lg:text-2xl">
							WE'RE GETTING MARRIED
						</p>
						<p className="text-primary font-cursive text-5xl lg:text-6xl">
							Save the Date
						</p>
						<p className="text-primary font-nav text-xl lg:text-2xl">
							April 13, 2024
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;

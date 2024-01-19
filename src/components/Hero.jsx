import HeroHeart from '../assets/images/HeroHeart.png';

const Hero = () => {
	return (
		<div
			className="relative h-screen w-screen bg-hero bg-cover bg-left-4 bg-no-repeat md:bg-right-4"
			id="home"
		>
			<div className=" absolute inset-0 bg-gray-800 opacity-50"></div>

			<div className="flex h-full items-center justify-center">
				<div className="relative">
					<img
						src={HeroHeart}
						alt=""
						className="w-[25rem] opacity-90 lg:w-[36rem]  "
					/>
					<div className="absolute left-16 top-36  flex flex-col items-center justify-center gap-6 lg:left-28 lg:top-56">
						<p className="font-nav text-xl text-primary lg:text-2xl">
							WE'RE GETTING MARRIED
						</p>
						<p className="font-cursive text-5xl text-primary lg:text-6xl">
							Save the Date
						</p>
						<p className="font-nav text-xl text-primary lg:text-2xl">
							April 13, 2024
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;

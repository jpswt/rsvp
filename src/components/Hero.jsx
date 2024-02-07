const Hero = () => {
	return (
		<div
			className="relative h-screen w-screen bg-hero bg-cover bg-[center_top_0rem] bg-no-repeat bg-origin-border lg:bg-[left_top_0rem] "
			id="home"
		>
			<div className=" absolute inset-0 bg-gray-800 opacity-30"></div>

			<div className="flex h-full items-center justify-center">
				<div className="relative">
					<div className="flex flex-col items-center justify-center opacity-90 lg:gap-0 lg:opacity-75 ">
						<p className="mb-4 font-nav text-2xl text-primary lg:mb-6 lg:text-3xl">
							WE'RE GETTING MARRIED
						</p>
						<p className="font-cursive text-5xl text-primary lg:text-7xl">
							Save the Date
						</p>
						<p className="font-nav text-2xl text-primary lg:text-3xl">
							April 13, 2024
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;

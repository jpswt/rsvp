import HeroHeart from '../assets/images/HeroHeart.png';

const Hero = () => {
	return (
		<div className="relative h-screen w-full bg-left md:bg-cover bg-hero bg-cover bg-no-repeat">
			{/* <img
				className="w-full min-w-[700px] h-screen object-cover object-center md:min-w-full"
				src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/> */}
			<div className=" absolute inset-0 bg-gray-800 opacity-50"></div>
			{/* <div className="absolute top-[20%] left-[15%] md:left-[25%] lg:left-[36%] w-[80%] ">
				<img src={HeroHeart} alt="" className="w-[30rem] lg:w-[36rem]  " />
			</div> */}
		</div>
	);
};
export default Hero;

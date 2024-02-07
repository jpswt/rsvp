import HeroHeart from '../assets/images/HeroHeart.png';
import Button from './Button';

const Hero2 = () => {
	return (
		<div
			className="relative mt-24 h-1/2 w-screen bg-rsvp bg-cover bg-fixed bg-center  bg-no-repeat"
			id="home"
		>
			<div className=" absolute inset-0 bg-primary opacity-30"></div>

			<div className="flex h-full min-h-[500px] items-center justify-center">
				<div className="top-50 left-50 lg:top-50 lg:left-50 absolute flex w-full flex-col items-center justify-center gap-6  md:w-1/2">
					<p className="w-full text-center font-cursive text-3xl text-primary lg:text-5xl">
						Welcome to Our Wedding Day
					</p>
					<p className="px-6 text-center font-nav text-lg text-primary md:text-xl lg:text-2xl"></p>
					<div className="flex gap-4">
						<Button url="#home" target="">
							RSVP
						</Button>
						<Button url="#gift" target="">
							REGISTRY
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero2;

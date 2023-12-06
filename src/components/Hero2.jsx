import HeroHeart from '../assets/images/HeroHeart.png';
import Button from './Button';

const Hero2 = () => {
	return (
		<div
			className="relative h-1/2 w-screen bg-left-4 md:bg-right-4 bg-fixed bg-rsvp bg-cover bg-no-repeat mt-24"
			id="home"
		>
			<div className=" absolute inset-0 bg-primary opacity-50"></div>

			<div className="flex items-center justify-center h-full min-h-[500px]">
				<div className="absolute top-50 left-50 lg:top-50 lg:left-50 flex flex-col items-center justify-center gap-6 w-full  md:w-1/2">
					<p className="text-primary font-cursive text-3xl lg:text-5xl">
						Welcome to Our Wedding Day
					</p>
					<p className="text-primary font-nav text-lg md:text-xl lg:text-2xl px-6 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
						aperiam. Sit ab deserunt corporis beatae cum modi dolores.
					</p>
					<div className="flex gap-4">
						<Button url="#home">RSVP</Button>
						<Button url="#couple">REGISTRY</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero2;

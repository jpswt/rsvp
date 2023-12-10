import HeroHeart from '../assets/images/HeroHeart.png';
import Banner from './Banner';
import Button from './Button';

const Rsvp = () => {
	return (
		<section
			className="relative flex flex-col h-screen w-screen bg-left-4 md:bg-right-4 bg-fixed bg-rsvp bg-cover bg-no-repeat mt-24"
			id="rsvp"
		>
			<div className=" absolute inset-0 bg-primary opacity-30"></div>
			<div className=" bg-white w-[90%] md:max-w-[560px]  m-auto z-0 min-h-[600px]">
				<Banner title="Be Our Guest" idName="" />
				<p className="text-center pt-4 text-gray-500 font-nav">
					Please reserve before February 1st, 2024
				</p>
				<form action="" className="px-20 pt-10">
					<input
						type="text"
						placeholder="Your Name"
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 outline-[#aec6cf]"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4"
					/>
					<select className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 text-gray-400">
						<option selected>Number of RSVP</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
					</select>
					<textarea
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 text-gray-400"
						name="message"
						id="message"
						cols="30"
						rows="5"
						placeholder="Message"
					/>
					<div className="flex items-center justify-center">
						<button className="bg-primary px-3 py-1 text-white font-nav rounded-md">
							Send Reservation
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
export default Rsvp;

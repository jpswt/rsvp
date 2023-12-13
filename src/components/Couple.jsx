import brushHeart from '../assets/images/brush-stroke-heart.png';
import Banner from './Banner';

const Couple = () => {
	return (
		<section>
			<Banner title="Bride & Groom" />
			<article className="max-w-[1200px] m-auto flex-col flex lg:flex-row w-full items-center justify-between mt-10 ">
				<div className="flex flex-col justify-center items-center font-nav">
					<img
						className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] border-2 border-[#aec6cf] rounded-full object-fit"
						src="https://images.unsplash.com/photo-1541314053190-1db8c88dc05a?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<h2 className="text-center text-secondary text-2xl mt-4 font-medium">
						AMANDA LAURIA
					</h2>
					<p className="text-lg text-center p-4 md:p-0 md:max-w-[60%] lg:max-w-full">
						Hi I am Amanda Lauria. I am going to introduce myself.I am a
						professional graphic designer professional graphic designer going to
						introduce myself.I am going to introduce myself.
					</p>
				</div>

				<img
					className="w-[140px] md:w-[160px] my-10 lg:mb-20"
					src={brushHeart}
					alt="paint brushed heart image"
				/>
				<div className="flex flex-col justify-center items-center font-nav">
					<img
						className="w-[350px] h-[350px] md:w-[420px] md:h-[420px] border-2 border-[#aec6cf] rounded-full object-auto"
						src="https://images.unsplash.com/photo-1606216769783-a7dbe227a17f?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<h2 className="text-center text-secondary text-2xl mt-4 font-medium">
						JOEL PEREZ
					</h2>
					<p className="text-lg text-center p-4 md:p-0 md:max-w-[60%] lg:max-w-full">
						Hi I am Joel Perez. I am going to introduce myself.I am a
						professional graphic designer professional graphic designer going to
						introduce myself.I am going to introduce myself.
					</p>
				</div>
			</article>
		</section>
	);
};
export default Couple;

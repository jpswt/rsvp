import brushHeart from '../assets/images/brush-stroke-heart.png';
import Banner from './Banner';

const Couple = () => {
	return (
		<section>
			<Banner title="Bride & Groom" idName="couple" />
			<article className="m-auto mt-10 flex w-full max-w-[1200px] flex-col items-center justify-between lg:flex-row ">
				<div className="flex flex-col items-center justify-center font-nav">
					<img
						className="object-fit h-[350px] w-[350px] rounded-full border-2 border-[#aec6cf] md:h-[420px] md:w-[420px]"
						src="https://images.unsplash.com/photo-1541314053190-1db8c88dc05a?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<h2 className="mt-4 text-center text-2xl font-medium text-secondary">
						AMANDA LAURIA
					</h2>
					<p className="p-4 text-center text-lg md:max-w-[60%] md:p-0 lg:max-w-full">
						Hi I am Amanda Lauria. I am going to introduce myself.I am a
						professional graphic designer professional graphic designer going to
						introduce myself.I am going to introduce myself.
					</p>
				</div>

				<img
					className="my-10 w-[140px] md:w-[160px] lg:mb-20"
					src={brushHeart}
					alt="paint brushed heart image"
				/>
				<div className="flex flex-col items-center justify-center font-nav">
					<img
						className="object-auto h-[350px] w-[350px] rounded-full border-2 border-[#aec6cf] md:h-[420px] md:w-[420px]"
						src="https://images.unsplash.com/photo-1606216769783-a7dbe227a17f?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
					<h2 className="mt-4 text-center text-2xl font-medium text-secondary">
						JOEL PEREZ
					</h2>
					<p className="p-4 text-center text-lg md:max-w-[60%] md:p-0 lg:max-w-full">
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

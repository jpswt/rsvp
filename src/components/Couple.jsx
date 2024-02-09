import brushHeart from '../assets/images/brush-stroke-heart.png';
import Groom from '../assets/images/DSC_8909.jpg';
import Bride from '../assets/images/DSC_8908_min.jpg';
import Banner from './Banner';

const Couple = () => {
	return (
		<section>
			<Banner title="Bride & Groom" idName="couple" />
			<article className="m-auto mt-10 flex w-full max-w-[1200px] flex-col items-center justify-between lg:flex-row ">
				<div className="flex flex-col items-center justify-center font-nav">
					<div className="h-[350px] w-[350px] overflow-hidden rounded-full border-2 border-[#aec6cf] md:h-[420px] md:w-[420px] ">
						<img
							className=" h-[350px] w-[350px] -scale-x-100  object-cover object-top md:h-[420px] md:w-[420px]"
							src={Bride}
							alt=""
						/>
					</div>
					<h2 className="mt-4 text-center text-2xl font-medium text-secondary">
						AMANDA LAURIA
					</h2>
				</div>

				<img
					className="my-10 w-[140px] md:w-[160px] lg:mb-20"
					src={brushHeart}
					alt="paint brushed heart image"
				/>
				<div className="flex flex-col items-center justify-center font-nav">
					<img
						className=" h-[350px] w-[350px] -scale-x-100 rounded-full border-2 border-[#aec6cf] object-cover object-bottom md:h-[420px] md:w-[420px]"
						src={Groom}
						alt=""
					/>
					<h2 className="mt-4 text-center text-2xl font-medium text-secondary">
						JOEL PEREZ
					</h2>
				</div>
			</article>
		</section>
	);
};
export default Couple;

import Timer from './Timer';

const Countdown = () => {
	return (
		<section className="max-w-[1200px] min-h-[160px] bg-primary m-auto mt-10 flex flex-col lg:flex-row">
			<div className="relative">
				<img
					className=" w-full lg:w-[600px] h-[160px] object-cover opacity-50"
					src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
				<div className="absolute p-4 top-4 w-full flex flex-col items-center lg:w-[400px] gap-4">
					<h3 className="text-primary font-nav text-2xl ">
						Countdown Until....
					</h3>
					<h2 className="text-primary font-cursive text-5xl">The Big Day</h2>
				</div>
			</div>
			<Timer />
		</section>
	);
};
export default Countdown;

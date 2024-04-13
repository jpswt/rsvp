import Timer from './Timer';

const Countdown = () => {
	return (
		<section className="m-auto mt-10 flex min-h-[160px] max-w-[1200px] flex-col bg-primary lg:flex-row">
			<div className="relative">
				<img
					className=" h-[260px] w-full object-cover opacity-50 lg:w-[600px]"
					src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
				<div className="absolute top-8 flex w-full flex-col items-center gap-4 p-4 lg:w-[400px]">
					<h3 className="font-cursive text-5xl text-primary ">
						It's Our Wedding Day!
					</h3>
					{/* <h2 className="font-cursive text-5xl text-primary">The Big Day</h2> */}
				</div>
			</div>
			{/* <div className=" flex w-full items-center justify-center ">
				<h2 className="  py-10 font-cursive text-5xl text-white lg:text-6xl">
					It's Our Wedding Day!
				</h2>
			</div> */}
			{/* <Timer /> */}
		</section>
	);
};
export default Countdown;

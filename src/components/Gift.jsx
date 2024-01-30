import Banner from './Banner';

const Gift = () => {
	return (
		<div className="m-auto mb-20 max-w-[1200px] font-nav">
			<Banner title="Gift Registry" idName="gift" />
			<p className="m-auto mt-10 w-[80%] text-center text-lg md:max-w-[60%] md:text-base lg:max-w-[50%]">
				The presence of our family and friends is the greatest gift of all.
				However, if it is your wish to bless us with a gift, we would greatly
				appreciate a contribution to our honeymoon fund and/or a donation to an
				organization that is near to our hearts.
			</p>
			<div className="mt-4">
				<div className="flex items-center justify-center gap-8 lg:gap-36">
					<a
						href="https://www.komen.org/"
						target="_blank"
						className="flex flex-col items-center justify-center"
					>
						<img
							className=" aspect-auto w-[90%] "
							src="https://www.komen.org/wp-content/uploads/Logo_2023.png"
							alt="Susan G Komen Breast Cancer Awareness Logo"
						/>
						<p className=" mt-4 p-0">Please dedicate donation to: </p>
						<p className="mt-0 p-0 text-lg font-semibold">Martha V. Perez</p>
					</a>
					<a
						href="https://www.komen.org/"
						target="_blank"
						className="flex flex-col items-center justify-center"
					>
						<img
							className=" aspect-auto w-[90%] "
							src="https://www.komen.org/wp-content/uploads/Logo_2023.png"
							alt="Susan G Komen Breast Cancer Awareness Logo"
						/>
						<p className=" mt-4 p-0">Please dedicate donation to: </p>
						<p className="mt-0 p-0 text-lg font-semibold">Martha V. Perez</p>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Gift;

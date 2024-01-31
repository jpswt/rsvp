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
				<div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-36">
					<a
						href="https://www.komen.org/"
						target="_blank"
						className="flex flex-col items-center justify-center rounded-md border border-transparent p-2 transition duration-300 ease-in-out hover:border-[#aec6cf]  hover:bg-primary hover:bg-opacity-10"
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
						href="https://axiainternational.net/user/login?redirectUrl=https%3A%2F%2Faxiainternational.net%2Forganization%2Fsubscribe%2F897-2270NWF"
						target="_blank"
						className=" flex w-fit flex-col items-center justify-center rounded-md border border-transparent p-2 transition duration-300 ease-in-out hover:border-[#aec6cf] hover:bg-primary hover:bg-opacity-10"
					>
						<img
							className=" w-[180px] "
							src="https://freedomchurchalliance.org/wp-content/uploads/2022/07/fca-logo-dark-300x129.png"
							alt="Freedom Church Alliance Logo"
						/>
						<p className=" mt-2 p-0">Uniting the Church to Fight</p>
						<p className="mt-0 p-0 "> Human Trafficking</p>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Gift;

import Banner from './Banner';

const Gift = () => {
	return (
		<div className="m-auto mb-20 max-w-[1200px]">
			<Banner title="Gift Registry" idName="gift" />
			<p className="m-auto mt-10 w-[80%] text-center md:max-w-[50%]">
				The presence of our family and friends is the greatest gift of all.
				However, if it is your wish to bless us with a gift, we would greatly
				appreciate a contribution to our honeymoon fund and/or a donation to an
				organization that is near to our hearts.
			</p>
		</div>
	);
};
export default Gift;

import { useEffect, useState } from 'react';

const Timer = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const timerEnds = 'April 13,2024';

	const getTime = () => {
		const time = Date.parse(timerEnds) - Date.now();

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(timerEnds), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="my-4 flex w-full  flex-wrap items-center justify-center gap-x-10">
			<div className="flex min-w-[140px] flex-col items-center border-[1px] p-4 text-primary">
				<p className=" font-cursive text-6xl font-bold">
					{days < 10 ? `0${days}` : days}
				</p>
				<p>DAYS</p>
			</div>
			<div className="flex min-w-[140px] flex-col items-center border-[1px] p-4 text-primary">
				<p className=" font-cursive text-6xl font-bold">
					{hours < 10 ? `0${hours}` : hours}
				</p>
				<p>HOURS</p>
			</div>
			<div className="flex min-w-[140px] flex-col items-center border-[1px] p-4 text-primary">
				<p className=" font-cursive text-6xl font-bold">
					{minutes < 10 ? `0${minutes}` : minutes}
				</p>
				<p>MINUTES</p>
			</div>
			<div className="flex min-w-[140px] flex-col items-center border-[1px] p-4 text-primary">
				<p className=" font-cursive text-6xl font-bold">
					{seconds < 10 ? `0${seconds}` : seconds}
				</p>
				<p>SECONDS</p>
			</div>
		</div>
	);
};
export default Timer;

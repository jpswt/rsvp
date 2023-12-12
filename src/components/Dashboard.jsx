import { useEffect, useState } from 'react';
import firestore from '../firebase';
import { doc, collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
	const [guests, setGuests] = useState([]);
	const [count, setCount] = useState(0);

	const db = collection(firestore, 'guests');

	const getGuests = async () => {
		const dbData = await getDocs(db);
		const guestsData = dbData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		setGuests(guestsData);
	};

	const totalGuests = () => {
		const total = guests.reduce((acc, guest) => acc + Number(guest.rsvp), 0);
		setCount((count) => count + total);
	};

	useEffect(() => {
		getGuests();
	}, []);

	useEffect(() => {
		totalGuests();
	}, [guests]);

	// console.log(guests);
	console.log(count);
	return (
		<div>
			<div className="h-[70px] bg-primary">
				<div className="max-w-[1200px] h-full m-auto flex items-center justify-between">
					<h1 className="text-primary font-cursive text-4xl">
						Wedding Dashboard
					</h1>
					<h2 className="text-primary text-2xl font-nav">
						Total Guests: {count}
					</h2>
				</div>
			</div>
			<div className="max-w-[1200px] m-auto mt-10 ">
				<table className="table-auto w-full [&>tbody>*:nth-child(even)]:bg-gray-200 ">
					<thead className="bg-primary bg-opacity-80 text-left">
						<tr className="">
							<th className="p-1">Guest Name</th>
							<th className="p-1">Guest Email</th>
							<th className="p-1">Number Attending</th>
							<th className="p-1">Message</th>
						</tr>
					</thead>
					<tbody>
						{guests.map((guest) => (
							<tr key={guest.id} className="">
								<td className="p-2">{guest.name}</td>
								<td className="p-2">{guest.email}</td>
								<td className="p-2">{guest.rsvp}</td>
								<td className="p-2">
									{guest.message || 'No message provided'}{' '}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default Dashboard;

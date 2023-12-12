import { useState } from 'react';
import Banner from './Banner';
import firestore from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Rsvp = () => {
	const [guest, setGuest] = useState({
		name: '',
		email: '',
		rsvp: '',
		message: '',
	});
	const [submitMsg, setSubmitMsg] = useState('');

	const db = collection(firestore, 'guests');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await addDoc(db, {
				name: guest.name,
				email: guest.email,
				rsvp: guest.rsvp,
				message: guest.message,
			});
			setSubmitMsg('Your reservation has been sent!');
			setTimeout(() => {
				setSubmitMsg('');
				e.target.reset();
				setGuest({
					name: '',
					email: '',
					rsvp: '',
					message: '',
				});
			}, 2000);
		} catch (error) {
			console.error(error);
			setSubmitMsg('Error Submitting Reservation.  Please Try Again.');
		}
	};

	const handleChange = (e) => {
		const newGuest = { ...guest };
		newGuest[e.target.name] = e.target.value;
		setGuest(newGuest);
	};

	console.log(guest);

	return (
		<section
			className="relative flex flex-col h-screen w-screen bg-left-4 md:bg-right-4 bg-fixed bg-rsvp bg-cover bg-no-repeat mt-24"
			id="rsvp"
		>
			<div className=" absolute inset-0 bg-primary opacity-30"></div>
			<div className=" bg-white w-[90%] md:max-w-[560px]  m-auto z-0 min-h-[620px]">
				<Banner title="Be Our Guest" idName="" />
				<p className="text-center pt-4 text-gray-500 font-nav">
					Please reserve before February 1st, 2024
				</p>
				<form onSubmit={handleSubmit} className="px-6 md:px-20 pt-10">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<select
						name="rsvp"
						value={guest.rsvp}
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 text-gray-400 outline-[#aec6cf]"
						onChange={handleChange}
					>
						<option value="" disabled hidden>
							Number of RSVP
						</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="5"
						placeholder="Message"
						className="block border-2 border-[#aec6cf] border-opacity-60 rounded-sm w-full px-2 py-1 mb-4 text-gray-400 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="bg-primary px-3 py-1 text-white font-nav rounded-md"
						>
							Send Reservation
						</button>
					</div>
					<div className="text-center font-nav text-secondary text-lg font-semibold mt-2">
						{submitMsg ? <p>{submitMsg}</p> : null}
					</div>
				</form>
			</div>
		</section>
	);
};
export default Rsvp;

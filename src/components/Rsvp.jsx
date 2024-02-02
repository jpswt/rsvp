import { useState } from 'react';
import Banner from './Banner';
import { firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const Rsvp = () => {
	const [guest, setGuest] = useState({
		name: '',
		email: '',
		rsvp: '',
		message: '',
	});
	const [submitMsg, setSubmitMsg] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.send('service_4m3ch8l', 'template_f9m66nw', guest, '2W8Xeo2kxz5dOXvQL')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

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
			sendEmail(e);
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
			className="relative mt-24 flex h-screen w-full flex-col bg-rsvp bg-cover bg-fixed bg-left-4 bg-no-repeat md:bg-right-4"
			id="rsvp"
		>
			<div className=" absolute inset-0 bg-primary opacity-30"></div>
			<div className=" z-0 m-auto min-h-[620px]  w-[90%] bg-white md:max-w-[560px]">
				<Banner title="Be Our Guest" idName="" />
				<p className="pt-4 text-center font-nav text-lg text-gray-500">
					Please RSVP before March 1st, 2024
				</p>
				<form onSubmit={handleSubmit} className="px-6 pt-10 md:px-20">
					<input
						type="text"
						name="name"
						placeholder="Full Name"
						className="mb-4 block w-full rounded-sm border-2 border-[#aec6cf] border-opacity-60 px-2 py-1 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="mb-4 block w-full rounded-sm border-2 border-[#aec6cf] border-opacity-60 px-2 py-1 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<select
						name="rsvp"
						value={guest.rsvp}
						className="mb-4 block w-full rounded-sm border-2 border-[#aec6cf] border-opacity-60 px-2 py-1 text-gray-400 outline-[#aec6cf]"
						onChange={handleChange}
					>
						<option value="" disabled hidden>
							Number of Guests
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
						className="mb-4 block w-full rounded-sm border-2 border-[#aec6cf] border-opacity-60 px-2 py-1 text-gray-400 outline-[#aec6cf]"
						onChange={handleChange}
					/>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="rounded-md bg-primary px-3 py-1 font-nav text-white"
						>
							Send Reservation
						</button>
					</div>
					<div className="mt-2 text-center font-nav text-lg font-semibold text-secondary">
						{submitMsg ? <p>{submitMsg}</p> : null}
					</div>
				</form>
			</div>
		</section>
	);
};
export default Rsvp;

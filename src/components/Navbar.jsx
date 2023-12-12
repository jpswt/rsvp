import { useState } from 'react';
import Heart from './Heart';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [navColor, setNavColor] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleCloseMenu = () => {
		setTimeout(() => {
			setShowMenu(false);
		}, 700);
	};

	const changeColorOnScroll = () => {
		window.scrollY >= 70 ? setNavColor(true) : setNavColor(false);
	};

	window.addEventListener('scroll', changeColorOnScroll);

	return (
		<header
			className={
				navColor
					? '  bg-[#aec6cf] fixed top-0 left-0 h-[70px] w-full ease-in duration-300 z-10 text-white'
					: 'bg-opacity-100  fixed top-0 left-0 h-[70px] w-full ease-in duration-300 z-10 border-b-[1px] border-opacity-80 text-white'
			}
		>
			<nav className="max-w-[1200px] h-full mx-auto flex items-center justify-between font-nav px-4">
				<h1 className=" text-3xl font-cursive md:text-4xl items-center text-primary flex gap-2">
					<span className="pr-2">Joel</span>
					<span>
						<Heart />
					</span>
					<span>Amanda</span>
				</h1>
				<ul className="gap-8 text-lg hidden md:flex">
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#home">Home</a>
					</li>
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#couple">Couple</a>
					</li>
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#story">Our Story</a>
					</li>
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#venue">Venue</a>
					</li>
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#rsvp">Rsvp</a>
					</li>
					<li
						className={
							navColor
								? 'text-primary cursor-pointer'
								: ' text-primary hover:text-secondary cursor-pointer'
						}
					>
						<a href="#gift">Registry</a>
					</li>
				</ul>
				<div
					className="z-20 block cursor-pointer md:hidden text-white"
					onClick={handleShowMenu}
				>
					<Hamburger showMenu={showMenu} />
				</div>
				{/* Mobile */}
				<div
					className={
						showMenu
							? 'fixed left-0 top-[0px] z-10 flex h-[100%] w-full flex-col items-center bg-primary duration-300 ease-in md:hidden'
							: 'fixed left-[-100%] top-[0px] flex h-[100%] flex-col items-center duration-300 ease-in '
					}
				>
					<ul className="w-full p-6 mt-[70px] flex flex-col gap-8 text-center">
						<li className=" text-white text-3xl w-full p-2 border-white border-opacity-50">
							<a href="#home" onClick={handleCloseMenu}>
								Home
							</a>
						</li>
						<li className=" text-white text-3xl w-full p-2 border-white border-opacity-50">
							<a href="#couple" onClick={handleCloseMenu}>
								Couple
							</a>
						</li>
						<li className=" text-white text-3xl w-full p-2 border-white border-opacity-50">
							<a href="#story" onClick={handleCloseMenu}>
								Our Story
							</a>
						</li>
						<li className=" text-white text-3xl w-full p-2 border-white border-opacity-50">
							<a href="#venue" onClick={handleCloseMenu}>
								Venue
							</a>
						</li>
						<li className=" text-white text-3xl w-full px-2 border-white border-opacity-50">
							<a href="#rsvp" onClick={handleCloseMenu}>
								Rsvp
							</a>
						</li>
						<li className=" text-white text-3xl w-full px-2 border-white border-opacity-50">
							<a href="#gift" onClick={handleCloseMenu}>
								Registry
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;

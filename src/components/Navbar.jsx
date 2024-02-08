import { useState } from 'react';
import Heart from './Heart';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [navColor, setNavColor] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const handleAnchorClick = (e) => {
		e.preventDefault();
		let targetId = e.target.getAttribute('href').substr(1);
		console.log(targetId);
		let targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleCloseMenu = (e) => {
		e.preventDefault();
		handleAnchorClick(e);
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
					? '  fixed left-0 top-0 z-10 h-[70px] w-full bg-[#aec6cf] text-white duration-300 ease-in'
					: 'fixed  left-0 top-0 z-10 h-[70px] w-full border-b-[1px] border-opacity-80 bg-opacity-100 text-white duration-300 ease-in'
			}
		>
			<nav className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 font-nav">
				<h1 className=" flex items-center gap-2 font-cursive text-3xl text-primary md:text-4xl">
					<span className="pr-2">Joel</span>
					<span>
						<Heart />
					</span>
					<span>Amanda</span>
				</h1>
				<ul className="hidden gap-8 text-lg md:flex">
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#home" onClick={handleAnchorClick}>
							Home
						</a>
					</li>
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#couple" onClick={handleAnchorClick}>
							Couple
						</a>
					</li>
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#story" onClick={handleAnchorClick}>
							Our Story
						</a>
					</li>
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#venue" onClick={handleAnchorClick}>
							Venue
						</a>
					</li>
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#rsvp" onClick={handleAnchorClick}>
							Rsvp
						</a>
					</li>
					<li
						className={
							navColor
								? 'cursor-pointer text-primary'
								: ' cursor-pointer text-primary hover:text-secondary'
						}
					>
						<a href="#gift" onClick={handleAnchorClick}>
							Registry
						</a>
					</li>
				</ul>
				<div
					className="z-20 block cursor-pointer text-white md:hidden"
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
					<ul className="mt-[70px] flex w-full flex-col gap-8 p-6 text-center">
						<li className=" w-full border-white border-opacity-50 p-2 text-3xl text-white">
							<a href="#home" onClick={handleCloseMenu}>
								Home
							</a>
						</li>
						<li className=" w-full border-white border-opacity-50 p-2 text-3xl text-white">
							<a href="#couple" onClick={handleCloseMenu}>
								Couple
							</a>
						</li>
						<li className=" w-full border-white border-opacity-50 p-2 text-3xl text-white">
							<a href="#story" onClick={handleCloseMenu}>
								Our Story
							</a>
						</li>
						<li className=" w-full border-white border-opacity-50 p-2 text-3xl text-white">
							<a href="#venue" onClick={handleCloseMenu}>
								Venue
							</a>
						</li>
						<li className=" w-full border-white border-opacity-50 px-2 text-3xl text-white">
							<a href="#rsvp" onClick={handleCloseMenu}>
								Rsvp
							</a>
						</li>
						<li className=" w-full border-white border-opacity-50 px-2 text-3xl text-white">
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

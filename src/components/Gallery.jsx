import { useState } from 'react';
import Banner from './Banner';
import Modal from './Modal';

import Portrait1 from '../assets/images/DSC_8903.jpg';
import LandScape1 from '../assets/images/DSC_8920.jpg';
import LandScape2 from '../assets/images/DSC_8949.jpg';
import Portrait4 from '../assets/images/DSC_8899.jpg';
import Portrait5 from '../assets/images/DSC_8912.jpg';
import Landscape3 from '../assets/images/DSC_8992.jpg';

const Gallery = () => {
	const [showModal, setShowModal] = useState(false);
	const [imgSrc, setImgSrc] = useState();

	const openModal = (imgSrc) => {
		setShowModal(true);
		setImgSrc(imgSrc);
	};

	return (
		<div className="m-auto max-w-[1200px]">
			<Banner title="Gallery" />
			<div className="mt-10 columns-1 gap-6 p-4 md:columns-2 lg:columns-2 lg:gap-6 xl:columns-3 ">
				<div className=" min-[368px] relative mb-6 min-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() => openModal(Portrait1)}
						className=" absolute left-0 top-[-80px] min-h-[368px] min-w-[368px] cursor-pointer object-cover transition-all duration-500 hover:scale-110 xl:top-[-60px]"
						src={Portrait1}
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md ">
					<img
						onClick={() => openModal(LandScape1)}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src={LandScape1}
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() => openModal(LandScape2)}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src={LandScape2}
						alt=""
					/>
				</div>
				<div className="min-[368px] relative mb-6 min-h-[368px]  overflow-hidden rounded-md">
					<img
						onClick={() => openModal(Portrait4)}
						className="absolute top-[-40px] min-h-[368px]  min-w-[368px] cursor-pointer transition-all duration-500 hover:scale-110"
						src={Portrait4}
						alt=""
					/>
				</div>
				<div className=" min-[368px] relative mb-6 min-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() => openModal(Portrait5)}
						className="absolute top-[-40px] min-h-[368px] min-w-[368px] cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src={Portrait5}
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() => openModal(Landscape3)}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src={Landscape3}
						alt=""
					/>
				</div>
			</div>
			{showModal ? (
				<Modal
					imgSrc={imgSrc}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			) : null}
		</div>
	);
};
export default Gallery;

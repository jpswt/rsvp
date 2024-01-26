import { useEffect, useState } from 'react';

const Modal = ({ showModal, setShowModal, imgSrc }) => {
	const [modalVisible, setModalVisible] = useState(false);
	console.log(imgSrc);

	useEffect(() => {
		if (!modalVisible) {
			setTimeout(() => {
				setModalVisible(true);
			}, 100);
		}
	}, [modalVisible]);

	const closeModal = () => {
		setModalVisible(false);
		setTimeout(() => {
			setShowModal(false);
		}, 100);
	};
	// console.log(imgSrc);
	return (
		<div>
			<div
				className={` fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-primary transition-opacity ${
					modalVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<div className="mb-2 w-full pr-10 text-right lg:w-1/2">
					<button
						onClick={closeModal}
						className=" text-md border border-gray-50 px-[8px] py-[2px] font-nav text-white"
					>
						X Close
					</button>
				</div>
				{/* <h1>Here is my modal</h1> */}
				<img
					src={imgSrc}
					alt=""
					className=" aspect-auto object-contain px-10 lg:h-[90%] lg:w-1/2"
				/>
			</div>
		</div>
	);
};
export default Modal;

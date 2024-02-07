import { useState } from 'react';
import Banner from './Banner';
import Modal from './Modal';

const Gallery = () => {
	const [showModal, setShowModal] = useState(false);
	const [imgSrc, setImgSrc] = useState('');

	const openModal = (imgSrc) => {
		setShowModal(true);
		setImgSrc(imgSrc);
	};

	return (
		<div className="m-auto max-w-[1200px]">
			<Banner title="Gallery" />
			<div className="mt-10 columns-1 gap-6 p-4 md:columns-2 lg:columns-2 lg:gap-6 xl:columns-3 ">
				<div className=" relative mb-6 min-h-[368px] min-w-[368px]  overflow-hidden rounded-md">
					<img
						onClick={() =>
							openModal(
								'https://firebasestorage.googleapis.com/v0/b/rsvp-2a7df.appspot.com/o/DSC_8903.JPG?alt=media&token=25d51e4d-9212-4502-8f4d-1cd831d3fd3b'
							)
						}
						className=" absolute left-0 top-[-180px] min-h-[368px] min-w-[368px] cursor-pointer object-cover transition-all duration-500 hover:scale-110 xl:top-[-60px]"
						src="https://firebasestorage.googleapis.com/v0/b/rsvp-2a7df.appspot.com/o/DSC_8903.JPG?alt=media&token=25d51e4d-9212-4502-8f4d-1cd831d3fd3b"
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md ">
					<img
						onClick={() =>
							openModal(
								'https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							)
						}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() =>
							openModal(
								'https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							)
						}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-[368px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() =>
							openModal(
								'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D'
							)
						}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-[368px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() =>
							openModal(
								'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D'
							)
						}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-[245px] mb-6 max-h-[368px] overflow-hidden rounded-md">
					<img
						onClick={() =>
							openModal(
								'https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							)
						}
						className="cursor-pointer object-cover transition-all duration-500 hover:scale-110"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

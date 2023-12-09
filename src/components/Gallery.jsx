import Banner from './Banner';

const Gallery = () => {
	return (
		<div className="max-w-[1200px] m-auto">
			<Banner title="Gallery" />
			<div className="columns-1 gap-6 md:columns-2 lg:gap-6 xl:columns-3 lg:columns-2 mt-10 p-4 ">
				<div className=" max-h-[368px] max-[368px] overflow-hidden rounded-md mb-6">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-h-[368px] max-[245px] overflow-hidden rounded-md mb-6 ">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-h-[368px] max-[245px] overflow-hidden rounded-md mb-6">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-h-[368px] max-[368px] overflow-hidden rounded-md mb-6">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-h-[368px] max-[368px] overflow-hidden rounded-md mb-6">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNlcmVtb255fGVufDB8MXwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div className=" max-h-[368px] max-[245px] overflow-hidden rounded-md mb-6">
					<img
						className="object-cover transition-all duration-500 hover:scale-110 cursor-pointer"
						src="https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
export default Gallery;

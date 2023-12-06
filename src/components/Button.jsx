const Button = ({ children, url }) => {
	return (
		<a
			className="text-primary border bg-primary py-2  rounded-2xl w-[120px] text-center "
			href={url}
		>
			{children}
		</a>
	);
};
export default Button;

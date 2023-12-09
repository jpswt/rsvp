const Button = ({ children, url, target }) => {
	return (
		<a
			className="text-primary border bg-primary py-2 px-4 rounded-2xl w-[120px] text-center "
			href={url}
			target={target}
		>
			{children}
		</a>
	);
};
export default Button;

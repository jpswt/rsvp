const Button = ({ children, url, target }) => {
	return (
		<a
			className="w-[120px] rounded-2xl border bg-primary px-4 py-2 text-center text-primary "
			href={url}
			target={target}
		>
			{children}
		</a>
	);
};
export default Button;

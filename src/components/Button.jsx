import { twMerge } from "tailwind-merge";

function Button({ title, className, icon, onClick, variant }) {
	return (
		<button
			onClick={onClick}
			className={twMerge(
				`relative py-1.5 px-4 w-max rounded-md bg-gradient-100 bg-opacity-80 uppercase whitespace-nowrap leading-6 shadow-sm transition-sm border border-solid border-[#18dc87] hover:drop-shadow-md hover:rotate-1 active:scale-95 active:translate-y-1 overflow-hidden isolate ${
					icon ? "flex-row gap-3" : ""
				}`,
				className
			)}
		>
			{!variant && (
				<div className="absolute inset-[1px] bg-[#daffdc] -z-10 rounded-[4px]"></div>
			)}

			{icon && icon}
			{title}
		</button>
	);
}
export default Button;

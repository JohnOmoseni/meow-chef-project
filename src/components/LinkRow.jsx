import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const LinkRow = ({ href, name, onClick }) => {
	const link = `relative w-max flex-row pt-1.5 px-2 pb-1 capitalize bg-[#9cffd0] !text-sm whitespace-nowrap rounded-md transition-sm hover:scale-105 hover:text-shadow-100 hover:-rotate-1`;
	const activeLink = `${link} bg-[#D9FFE8] rounded-md shadow-md`;

	const location = useLocation();
	const { pathname } = location;

	return name === "Docs" ? (
		<a
			href={href}
			className={`${link}`}
			aria-label="Docs"
			target="_blank"
			rel="noreferrer"
		>
			Docs
		</a>
	) : (
		<Link
			to={href}
			// className={({ isActive }) => (isActive ? activeLink : link)}
			className={`${link}`}
			onClick={onClick}
			activeClass="active"
			spy={true}
			smooth={true}
			offset={href.includes("roadmap") ? 200 : -2}
			duration={400}
		>
			{name}
		</Link>
	);
};

export default LinkRow;

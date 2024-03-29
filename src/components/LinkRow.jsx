import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navAnimate } from "@utils";

const LinkRow = ({ href, name, onClick, idx }) => {
	const link = `relative w-max flex-row pt-1.5 px-2 pb-1 capitalize bg-[#9cffd0] !text-sm whitespace-nowrap rounded-md transition-sm hover:scale-105 hover:text-shadow-100 hover:-rotate-1`;
	const activeLink = `${link} bg-[#D9FFE8] rounded-md shadow-md`;

	const location = useLocation();
	const { pathname } = location;

	return (
		<motion.div
			variants={navAnimate}
			initial="hidden"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			custom={idx}
		>
			{name === "Docs" ? (
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
			)}
		</motion.div>
	);
};

export default LinkRow;

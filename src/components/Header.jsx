import { navLinks } from "@constants/navLinks";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import LinkRow from "./LinkRow";
import logo from "@icons/logo.svg";

const Header = ({ setOpenMenu }) => {
	return (
		<header className="max-sm:fixed max-sm:bg-gradient-header top-2 left-2 right-2 z-[200] max-sm:rounded-md max-sm:shadow-sm max-sm:backdrop-blur-md max-sm:bg-opacity-80 absolute flex-row gap-8 !justify-between mx-auto pr-2 sm:px-4 sm:py-2">
			<Link
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={400}
				className="group !flex !w-[50px] sm:!w-[70px] sm:-mt-2 transition-sm hover:scale-[0.9]"
			>
				<img
					src={logo}
					alt="meow-chef"
					className="group-hover:drop-shadow-md"
				/>
			</Link>

			<div className="hidden md:flex-row gap-4">
				{navLinks?.map((link, idx) => (
					<LinkRow key={idx} {...link} />
				))}
			</div>

			<Button
				title="Chart"
				className="hidden md:block font-variant leading-4 text-lg bg-gradient-100 bg-opacity-90 py-1 px-8"
			/>

			<div className="block md:hidden" onClick={() => setOpenMenu(true)}>
				<HiOutlineMenuAlt4 size={20} color="#DAFFDC" />
			</div>
		</header>
	);
};

export default Header;

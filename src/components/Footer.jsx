import { footerLinks } from "@constants/navLinks";
import { Link } from "react-router-dom";
import logo from "@icons/logo.svg";

const FooterLink = ({ href, icon }) => (
	<Link
		to={href}
		className="group !flex items-center py-1.5 px-8 rounded-xl border-2 border-solid border-[#7562f2ae] bg-[#9CFFD0] shadow-sm "
	>
		{icon}
	</Link>
);

const year = new Date().getFullYear();

function Footer() {
	return (
		<div className="relative z-10 w-full shadow-sm bg-[#EEFFEF] flex-column !items-center gap-6 pt-[2em] dp-shad">
			<div className="!flex-wrap flex-row gap-4 py-8 bg-inherit">
				{footerLinks?.map((link, idx) => {
					return <FooterLink key={idx} {...link} />;
				})}
			</div>
			<div className="group -mt-[40px] sm:-mt-[65px] relative -z-10 w-[140px] sm:w-[200px]">
				<img
					src={logo}
					alt="meow-chef"
					className="group-hover:drop-shadow-md"
				/>
			</div>
			<p className="font-variant text-sm whitespace-nowrap mb-3 leading-0">
				© {year}• All Rights Reserved.
			</p>
		</div>
	);
}
export default Footer;

import { FaTelegramPlane } from "react-icons/fa";
import { PiInstagramLogoLight, PiTwitterLogoFill } from "react-icons/pi";
import BirdEye from "@icons/birdeye.svg";
import Jupyter from "@icons/jupyter.svg";

export const navLinks = [
	{
		name: "Home",
		href: "home",
	},
	{
		name: "Token Info",
		href: "tokeninfo",
	},
	{
		name: "Cat info",
		href: "about",
	},
	{
		name: "Little puff merch",
		href: "https://mikesonsmith88.wixsite.com/infinite_wealth",
	},
];

export const footerLinks = [
	{
		icon: <img src={Jupyter} alt="" className="!w-[32px] !h-[32px]" />,
		name: "Facebook",
		href: "https://web.facebook.com/groups/1789015331551141/?_rdc=1&_rdr",
	},
	{
		icon: <img src={BirdEye} alt="" className="!w-[32px] !h-[32px]" />,
		name: "Instagram",
		href: "https://www.instagram.com/extinction_001/",
	},
	{
		icon: <FaTelegramPlane className="icon" size={32} color="#0091ff" />,
		name: "Telegram",
		href: "https://telegram.com/Infinitewealt",
	},
	{
		icon: <PiTwitterLogoFill className="icon" size={32} color="#0091ff" />,
		name: "Twitter",
		href: "https://twitter.com/Infinitewealt",
	},
];

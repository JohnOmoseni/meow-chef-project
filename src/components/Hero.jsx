import { motion } from "framer-motion";
import { container, listAnimate } from "@utils";
import Button from "./Button";
import hero from "@assets/images/hero.png";

function Hero() {
	return (
		<motion.div
			id="home"
			variants={container}
			initial="hidden"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			className="pt-[18vh] sm:pt-[10%] flex-column h-full bg-hero"
		>
			<motion.div
				variants={listAnimate}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.1 }}
				className="w-full px-4"
			>
				<h1 className="uppercase font-variant relative text-center select-none whitespace-nowrap drop-shadow-hero">
					Meow chef
				</h1>
			</motion.div>

			<motion.div
				variants={listAnimate}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				className="relative -mt-[55px] sm:-mt-[80px] mb-[2.5em] mx-auto icon min-w-[340px] max-w-[600px] md:max-w-[600px]"
			>
				<img src={hero} alt="" />
				<Button
					title="Buy on raydium"
					variant={true}
					className="max-sm:-mt-3 sm:absolute bottom-[2em] font-variant text-[1rem] flex mx-auto bg-gradient-100 text-white"
				/>
			</motion.div>

			<div className="w-full h-[1.5em] absolute bottom-0 left-0 bg-gradient-300 -z-10"></div>
		</motion.div>
	);
}
export default Hero;

import { roadmap } from "@constants/constants";
import { motion } from "framer-motion";
import { listAnimate } from "@utils";
import RevealAnimate from "../RevealAnimate";

export const Card = ({ text, idx }) => (
	<motion.div
		variants={listAnimate}
		initial="hidden"
		whileInView="animate"
		viewport={{ once: true, amount: 0.2 }}
		custom={idx}
		className="relative w-full bg-gradient-200 bg-opacity-90 py-4 px-8 flex-row backdrop-blur-md border border-solid border-t-0 border-b-2 border-br-clr transition-sm rounded-md shadow-sm hover:backdrop-blur-sm hover:dp-shad"
	>
		<div className="absolute inset-[1px] bg-[#EEFFEF] -z-10 rounded-[4px]"></div>
		<p className="text-center">{text}</p>
	</motion.div>
);

function Roadmap() {
	return (
		<motion.div
			id="roadmap"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-roadmap w-full min-h-[100vh] relative p-section grid place-items-center"
		>
			<RevealAnimate>
				<h2 className="uppercase bg-[#EEFFEF] bg-opacity-50 py-2.5 px-6 sm:px-8 rounded-full dp-shad-200">
					TOKENOMICS
				</h2>
			</RevealAnimate>
			<ul className="mt-[4em] mx-auto flex-column gap-4">
				{roadmap?.map((text, idx) => (
					<Card key={idx} text={text} idx={idx} />
				))}
			</ul>
		</motion.div>
	);
}
export default Roadmap;

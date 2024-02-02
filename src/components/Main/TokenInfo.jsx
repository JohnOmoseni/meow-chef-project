import { motion } from "framer-motion";
import { container, listAnimate } from "@utils";
import img from "@assets/images/meow-chef (4).png";
import RevealAnimate from "../RevealAnimate";

function TokenInfo() {
	return (
		<div
			id="tokeninfo"
			className="relative px-[4%] pt-[4em] sm:pt-[6em] pb-[3em] min-h-[140vh] bg-no-repeat bg-cover bg-center"
			style={{ backgroundImage: "url(/images/bg2.png)" }}
		>
			<RevealAnimate>
				<h3 className="w-full uppercase font-variant md:w-max max-md:text-center">
					Token Info
				</h3>
			</RevealAnimate>
			<div className="my-8 sm:my-[3em] flex-column md:justify-around md:grid grid-cols-two gap-3">
				<RevealAnimate className="relative justify-self-start isolate bg-gradient-100 p-6 rounded-lg overflow-hidden">
					<div className="absolute inset-[3px] bg-[#daffdc] -z-10 rounded-[5px]"></div>
					$MEOWCHEF is a unique token that has recently launched within the
					Solana Ecosystem. It is a tribute to Little Puff, the famous chef cat
					who has captured the hearts of many with his adorable cooking videos.
					This token not only serves as a way to honor Little Puff's talents and
					charm, but it also brings together a community of like-minded
					individuals who share a love for cats and cooking. The $MEOWCHEF
					community on Solana is a welcoming and supportive space where
					meowmbers can share their own cat-related content/memes and interact
					with others who appreciate Little Puff's adorable antics. This token
					and community highlights the power of crypto to connect people through
					shared interests and bring joy to others through the lovable character
					of Little Puff and Cooking
				</RevealAnimate>
				<motion.div className="-mt-3 md:-mt-[130px] mx-auto max-w-[340px] sm:max-w-[500px]">
					<img src={img} alt="" className="" />
				</motion.div>
			</div>
		</div>
	);
}

export default TokenInfo;

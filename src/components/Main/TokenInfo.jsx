import { motion } from "framer-motion";
import { container, listAnimate } from "@utils";
import img from "@assets/images/meow-chef (4).png";

function TokenInfo() {
	return (
		<div
			id="tokeninfo"
			className="relative pt-[4em] px-3 sm:pt-[6em] pb-[3em] sm:pl-[5%] sm:pr-3 min-h-[150vh] bg-no-repeat bg-cover bg-center -mt-1"
			style={{ backgroundImage: "url(/public/images/bg2.png)" }}
		>
			<h3 className="w-full uppercase font-variant sm:w-max max-sm:text-center">
				Token Info
			</h3>
			<div className="my-8 sm:my-[3em] flex-column sm:grid grid-cols-two gap-3 justify-between mx-auto">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="animate"
					className="relative self-start isolate bg-gradient-100 p-6 rounded-lg overflow-hidden"
				>
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
				</motion.div>

				<motion.div className="-mt-4 sm:-mt-[130px] mx-auto max-w-[340px] sm:max-w-[400px]">
					<img src={img} alt="" className="" />
				</motion.div>
			</div>
		</div>
	);
}

export default TokenInfo;

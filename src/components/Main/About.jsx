import { motion } from "framer-motion";
import img from "@assets/images/meow-chef (2).png";
import { container, listAnimate } from "@utils";
import RevealAnimate from "../RevealAnimate";

function About() {
	return (
		<div
			id="about"
			className="relative p-section !pl-[3%] min-h-[100vh] bg-no-repeat bg-cover bg-center -mt-1"
			style={{ backgroundImage: "url(/public/images/bg2.png)" }}
		>
			<div className="relative">
				<div className="sm:ml-[45%] sm:translate-x-[-1%]">
					<RevealAnimate>
						<h3 className="uppercase font-variant">
							information about little puff
						</h3>
					</RevealAnimate>

					<RevealAnimate className="relative mt-[3em] isolate bg-gradient-100 py-4 px-6 rounded-lg overflow-hidden">
						<div className="absolute inset-[2px] bg-[#daffdc] -z-10 rounded-[5px]"></div>
						Meow Chef, also known by his adorable nickname Little Puff, is a
						charming ragdoll cat with a love for cooking and creating delicious
						meals. This furry feline is known for his impressive culinary skills
						and often shares his recipes and cooking adventures on social media
						platforms. With his soft and fluffy appearance and playful
						personality, Meow Chef has gained a large following of fans who
						eagerly await his next tasty creation. Whether he's whipping up a
						new meal or trying out life hacks, Meow Chef brings joy and
						entertainment to all those around him. His passion for food and
						cooking is truly one of a kind, making him a unique and lovable
						member of the cat community
					</RevealAnimate>
				</div>
				<motion.div className="mx-auto relative sm:absolute -top-3 max-sm:left-6 max-sm:w-[400px] sm:max-w-[600px] select-none">
					<img src={img} alt="" className="" />
				</motion.div>
			</div>

			<RevealAnimate>
				<h1 className="mt-6 uppercase font-variant px-1 relative text-center text-gradient-100 dp-shad-300 select-none whitespace-nowrap text-shadow-300">
					Meow chef
				</h1>
			</RevealAnimate>
			<div className="w-full h-[1.5em] absolute bottom-0 left-0 bg-gradient-300"></div>
		</div>
	);
}
export default About;

import Button from "./Button";
import hero from "@assets/images/hero.png";
import RevealAnimate from "./RevealAnimate";

function Hero() {
	return (
		<div
			id="home"
			className="pt-[18vh] sm:pt-[10%] flex-column !justify-start min-h-[100svh] bg-hero"
		>
			<RevealAnimate delay={0.8}>
				<h1 className="w-full uppercase font-variant relative text-center select-none whitespace-nowrap drop-shadow-hero">
					Meow chef
				</h1>
			</RevealAnimate>

			<RevealAnimate
				className="relative -mt-[55px] sm:-mt-[80px] mb-[2.5em] mx-auto max-sm:ml-[-40px] min-w-[450px] max-w-[600px] md:max-w-[600px]"
				delay={1.4}
			>
				<img src={hero} alt="" />
				<RevealAnimate className="max-sm:-mt-3 sm:absolute bottom-[2em] ">
					<Button
						title="Buy on raydium"
						variant={true}
						className="font-variant text-[1rem] flex mx-auto  text-white"
					/>
				</RevealAnimate>
			</RevealAnimate>

			<div className="w-full h-[1.5em] absolute bottom-0 left-0 bg-gradient-300 -z-10"></div>
		</div>
	);
}
export default Hero;

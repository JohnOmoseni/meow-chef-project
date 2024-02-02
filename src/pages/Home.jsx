import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/Main/About";
import TokenInfo from "@components/Main/TokenInfo";
import Roadmap from "@components/Main/Roadmap";
import Footer from "@components/Footer";
import RevealAnimate from "../components/RevealAnimate";

function Home({ setOpenMenu }) {
	return (
		<>
			<div
				className="relative bg-no-repeat bg-cover bg-center min-h-[100svh] z-10"
				style={{ backgroundImage: "url(/images/bg2.png)" }}
			>
				<Header setOpenMenu={setOpenMenu} />
				<Hero />
				<div className="w-full h-[1.5em] absolute bottom-0 left-0 bg-gradient-200 -z-10"></div>
			</div>
			<TokenInfo />
			<About />
			<main>
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
export default Home;

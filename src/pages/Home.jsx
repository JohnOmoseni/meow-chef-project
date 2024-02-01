import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/Main/About";
import TokenInfo from "@components/Main/TokenInfo";
import Roadmap from "@components/Main/Roadmap";
import Footer from "@components/Footer";

function Home({ setOpenMenu }) {
	return (
		<>
			<div
				className="relative bg-no-repeat bg-cover bg-center min-h-[100vh]"
				style={{ backgroundImage: "url(/public/images/bg.png)" }}
			>
				<Header setOpenMenu={setOpenMenu} />
				<Hero />
			</div>
			<main>
				<TokenInfo />
				<About />
				<Roadmap />
			</main>
			<Footer />
		</>
	);
}
export default Home;

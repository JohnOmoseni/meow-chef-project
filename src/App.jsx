import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import AOS from "aos";

import "aos/dist/aos.css";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="wrapper isolate">
			<ScrollToTop />
			<AnimatePresence>
				{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			</AnimatePresence>

			<Routes>
				<Route path="*" element={<Home setOpenMenu={setOpenMenu} />} />
			</Routes>
		</div>
	);
}

export default App;

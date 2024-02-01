import { useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const revealVariants = {
	hidden: { opacity: 0, y: 75 },
	visible: { opacity: 1, y: 0 },
};

function RevealAnimate({ children }) {
	const isInView = useInView(ref, { once: true });
	const revealControls = useAnimationControls;
	const ref = useRef();

	useEffect(() => {
		if (isInView) {
			revealControls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			varaints={revealVariants}
			initial="hidden"
			animate={revealControls}
			transition={{ duration: 0.6, delay: 0.3 }}
		>
			{children}
		</motion.div>
	);
}

export default RevealAnimate;

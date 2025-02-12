import React, { useState, useEffect } from "react";
import Icons from "../components/Icons";
import Home from "../components/Home";



const Main = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<main className="min-h-screen relative overflow-hidden bg-primary">
			{/* Main Content */}
			<Home />

			<Icons
				ariaLabel="Social media links"
				className={`fixed ${isMobile ? "bottom-20 right-8 -translate-x-1/2" : "right-8 bottom-8"
					} z-20`}
			/>

		</main>
	);
};

export default Main;

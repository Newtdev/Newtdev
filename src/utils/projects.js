import Krext from "../Image/Krext.webp";
import LearnAfrica from "../Image/LearnAfrica.webp";
import KOI from "../Image/KOI.webp";
import Decove from "../Image/Decove.webp";
import Sky from "../Image/Sky.webp";
import Dryve from "../Image/Dryve.webp";
import DecoveApp from "../Image/Decove App.webp";
export const projects = {
	web: [
		{
			id: 1,
			imgSrc: Krext,
			header: "Krext",
			description: "Simplify the Process of Planning and Executing Meetings",
			link: "https://krext.com/",
			tech: [
				"React",
				"Redux",
				"Typescript",
				"Redux toolkit",
				"Material UI",
				"TailwindCSS",
			],
		},
		{
			id: 2,
			imgSrc: LearnAfrica,
			header: "LearnAfrica",
			description:
				"Access thousands of school textbooks and learning materials online.",
			link: "https://learnafrica.ng/",
			tech: [
				"React",
				"Redux toolkit",
				"Typescript",
				"TailwindCSS",
				"OpenAI API",
			],
		},
		{
			id: 3,
			imgSrc: KOI,
			header: "KOI",
			description:
				"Pioneering a New Era of Profit Distribution in Social Networks for Greater Transparency and Fairness.",
			link: "https://koinflation.co/",
			tech: ["React", "TailwindCSS", "Typescript", "Animate-scroll"],
		},
		{
			id: 4,
			imgSrc: Decove,
			header: "Decove",
			description: "Fresh Grocery Delivered To Your Door Step.",
			link: "https://decove.com/",
			tech: ["React", "TailwindCSS", "Typescript", "Animate-scroll"],
		},
		{
			id: 5,
			imgSrc: Sky,
			header: "Sky Venture",
			description: "One world, one ecosystem #1 incubator",
			link: "https://www.skyventure.io/",
			tech: ["React", "TailwindCSS", "Typescript", "Animate-scroll"],
		},
	],
	mobile: [
		{
			id: 1,
			imgSrc: Dryve,
			title: "Dryve",
			description:
				"Dryve app is a premium e-hailing travel experience. Sustainable rides in very executive vehicles for friendly trips. Just tap that button to order a ride, get picked up by a nearby driver, and enjoy a low-cost ride to your destination.",
			link: "https://play.google.com/store/apps/details?id=com.dryveuser",
			tech: [
				"React Native",
				"Typescript",
				"Redux toolkit",
				"Websocket",
				"Google Map",
			],
		},
		{
			id: 2,
			imgSrc: Dryve,
			title: "Dryve Driver",
			description:
				"At Dryve, we believe that your journey should be as enjoyable as your destination. Whether you're commuting to work, heading out for a night on the town, or exploring the vibrant streets of Nigeria, Dryve is here to make your ride seamless, safe, and stress-freer",
			link: "https://play.google.com/store/apps/details?id=com.dryve.driver",
			tech: [
				"React Native",
				"nativeWind",
				"Typescript",
				"Redux toolkit",
				"Socket.io",
				"Google Map",
			],
		},
		{
			id: 3,
			imgSrc: DecoveApp,
			title: "Décove",
			description:
				"Tired of lugging heavy bags home from the grocery store? Let us do the heavy lifting!",
			link: "https://drive.google.com/drive/folders/188ARqYiZJDo2EwklZiVD9PqfmvW8lUrM?usp=sharing",
			tech: ["Flutter", "Google Map"],
		},
	],
};

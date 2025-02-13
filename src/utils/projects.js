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
			slug: "dryve-user-app",
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
			walkthrough: {
				id: "dryve-user-app",
				title: "Dryve User App",
				elevatorPitch:
					"Develop the user app for an e-hailing platform that helps users book rides in advance, pay later, share rides, and manage dispatch.",
				sections: [
					{
						title: "My Role & Contributions",
						content: {
							role: "Mobile App Development",
							contributions: [
								"Implemented the designed user interface",
								"Implemented real-time ride updates for both users and drivers",
								"Implemented background location updates for the user app, tracking changes during rides and ride ordering",
								"Optimized app performance for low-end devices",
								"Integrated voice and chat communication channels for users",
							],
							metrics: {
								performance:
									"App runs faster and works well on low-end devices",
								security: "",
								adoption: "",
							},
						},
					},
					{
						title: "Core Features",
						content: {
							features: [
								{
									name: "Real-time Ride Tracking",
									icon: "📍",
									components: [
										"WebSocket duplex communication",
										"Google Maps SDK integration",
										"Driver ETA prediction engine",
										"Ride status state machine",
									],
									implementation: {
										architecture: "Redux for ride state management",
										tech: [
											"React Native Reanimated for smooth map updates",
											"Geolocation service with 5m accuracy",
											"Optimized marker clustering",
										],
										challenges: [
											"Maintaining socket connection on poor networks",
											"Battery optimization during continuous tracking",
										],
									},
									metrics: {
										updateInterval: "2s location refresh",
										latency: "<800ms position broadcast",
										accuracy: "3m radius precision",
									},
								},
								{
									name: "Background Location Tracking",
									icon: "📡",
									components: [
										"Foreground service implementation",
										"Distance-based update triggers",
										"Battery optimization layer",
										"Emergency location logging",
									],
									implementation: {
										architecture: "Task queuing system",
										tech: [
											"react-native-geolocation-service",
											"react-native-background-actions",
											"Motion activity recognition",
										],
										challenges: [
											"Android background location restrictions",
											"Preventing GPS drift in dense urban areas",
										],
									},
									metrics: {
										accuracy: "8m average in background",
										batteryImpact: "<3% per hour usage",
										reliability: "99.5% trip coverage",
									},
								},
								{
									name: "In-app Communication",
									icon: "📞",
									components: [
										"Voice call integration",
										"Chat message persistence",
										"Notification system",
										"Communication encryption",
									],
									implementation: {
										architecture: "Twilio Programmable Voice",
										tech: [
											"WebRTC for peer-to-peer calls",
											"Firestore for chat history",
											"AES-256 message encryption",
										],
										challenges: [
											"Maintaining call quality on 3G networks",
											"Syncing chat across devices",
										],
									},
									metrics: {
										callQuality: "98% packet delivery",
										latency: "1.2s average message delivery",
										usage: "35% ride communication rate",
									},
								},
								{
									name: "Ride Booking Management",
									icon: "🚖",
									components: [
										"Advance scheduling system",
										"Ride sharing algorithms",
										"Dynamic pricing engine",
										"Payment gateway integration",
									],
									implementation: {
										architecture: "Event-driven architecture",
										tech: [
											"React Native Calendar SDK",
											"Route optimization API",
											"Stripe payment processing",
										],
										challenges: [
											"Handling last-minute cancellations",
											"Predicting ride demand spikes",
										],
									},
									metrics: {
										bookingSuccess: "99.1% success rate",
										etaAccuracy: "92% within 2 minutes",
										sharingEfficiency: "28% fuel savings",
									},
								},
							],
						},
					},
					{
						title: "Technical Deep Dive",
						content: {
							architecture: {
								frontend:
									"React Native + TypeScript + Redux + WebSocket + Google Maps + Geolocation Service",
							},
							challenges: [
								{
									problem:
										"Real-time synchronization between user and driver apps",
									solution:
										"Implemented robust WebSocket communication to ensure a stable connection",
									result:
										"Real-time communication works reliably even on poor internet connections",
								},
								{
									problem:
										"Real-time updates of user/driver location changes on Google Maps",
									solution:
										"Implemented functionality that provides users with immediate driver location updates as soon as their location changes",
									result:
										"Users receive real-time driver location updates with all markers displayed on the map, aiding in smoother ride processing",
								},
								{
									problem:
										"After a user orders a ride and becomes inactive in the app, updating the user's current location in the background",
									solution:
										"Implemented a foreground service using react-native-geolocation-service and react-native-background actions to update the user's location every few meters",
									result:
										"Users are easily located at the pickup location as their location changes, ensuring drivers are always aware of their updated position",
								},
							],
						},
					},
				],
			},
		},
		{
			id: 2,
			imgSrc: Dryve,
			title: "Dryve Driver App",
			slug: "dryve-driver-app",
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
			walkthrough: {
				id: "dryve-driver-app",
				title: "Dryve User App",
				elevatorPitch:
					"Develop the driver's app for an e-hailing platform that helps receive rides request in advance, pay later, share rides among drivers, and manage dispatch.",
				sections: [
					{
						title: "My Role & Contributions",
						content: {
							role: "Mobile App Development",
							contributions: [
								"Implemented the designed driver interface",
								"Implemented real-time ride updates for both users and drivers",
								"Implemented background location updates for the driver app, tracking changes during rides and ride ordering",
								"Optimized app performance for low-end devices",
								"Integrated voice and chat communication channels for drivers",
							],
							metrics: {
								performance:
									"App runs faster and works well on low-end devices",
							},
						},
					},
					{
						title: "Core Features",
						content: {
							features: [
								{
									name: "Real-time Ride Tracking",
									icon: "📍",
									components: [
										"WebSocket duplex communication",
										"Google Maps SDK integration",
										"Driver ETA prediction engine",
										"Ride status state machine",
									],
									implementation: {
										architecture: "Redux for ride state management",
										tech: [
											"React Native Reanimated for smooth map updates",
											"Geolocation service with 5m accuracy",
											"Optimized marker clustering",
										],
										challenges: [
											"Maintaining socket connection on poor networks",
											"Battery optimization during continuous tracking",
										],
									},
									metrics: {
										updateInterval: "2s location refresh",
										latency: "<800ms position broadcast",
										accuracy: "3m radius precision",
									},
								},
								{
									name: "Background Location Tracking",
									icon: "📡",
									components: [
										"Foreground service implementation",
										"Distance-based update triggers",
										"Battery optimization layer",
										"Emergency location logging",
									],
									implementation: {
										architecture: "Task queuing system",
										tech: [
											"react-native-geolocation-service",
											"react-native-background-actions",
											"Motion activity recognition",
										],
										challenges: [
											"Android background location restrictions",
											"Preventing GPS drift in dense urban areas",
										],
									},
									metrics: {
										accuracy: "8m average in background",
										batteryImpact: "<3% per hour usage",
										reliability: "99.5% trip coverage",
									},
								},
								{
									name: "In-app Communication",
									icon: "📞",
									components: [
										"Voice call integration",
										"Chat message persistence",
										"Notification system",
										"Communication encryption",
									],
									implementation: {
										architecture: "Twilio Programmable Voice",
										tech: [
											"WebRTC for peer-to-peer calls",
											"Firestore for chat history",
											"AES-256 message encryption",
										],
										challenges: [
											"Maintaining call quality on 3G networks",
											"Syncing chat across devices",
										],
									},
									metrics: {
										callQuality: "98% packet delivery",
										latency: "1.2s average message delivery",
										usage: "35% ride communication rate",
									},
								},
								{
									name: "Ride Booking Management",
									icon: "🚖",
									components: [
										"Advance scheduling system",
										"Ride sharing algorithms",
										"Dynamic pricing engine",
										"Payment gateway integration",
									],
									implementation: {
										architecture: "Event-driven architecture",
										tech: [
											"React Native Calendar SDK",
											"Route optimization API",
											"Stripe payment processing",
										],
										challenges: [
											"Handling last-minute cancellations",
											"Predicting ride demand spikes",
										],
									},
									metrics: {
										bookingSuccess: "99.1% success rate",
										etaAccuracy: "92% within 2 minutes",
										sharingEfficiency: "28% fuel savings",
									},
								},
							],
						},
					},
					{
						title: "Technical Deep Dive",
						content: {
							architecture: {
								frontend:
									"React Native + TypeScript + Redux + WebSocket + Google Maps + Geolocation Service",
							},
							challenges: [
								{
									problem:
										"Real-time synchronization between user and driver apps",
									solution:
										"Implemented robust WebSocket communication to ensure a stable connection",
									result:
										"Real-time communication works reliably even on poor internet connections",
								},
								{
									problem:
										"Real-time updates of user/driver location changes on Google Maps",
									solution:
										"Implemented functionality that provides driver with immediate user location updates as soon as their location changes",
									result:
										"Drivers receive real-time user's location updates with all markers displayed on the map, aiding in smoother ride processing",
								},
								{
									problem:
										"Drivers can remain active on the app but may want to go offline temporarily to avoid receiving ride requests, without having to close the app or disable their Wi-Fi.",
									solution:
										"Implemented an 'offline mode' toggle that lets drivers mark themselves as unavailable for ride requests while remaining connected.",
									result:
										"Drivers can seamlessly switch between online and offline states, ensuring they don't receive unwanted ride requests while maintaining connectivity for other app features.",
								},
							],
						},
					},
				],
			},
		},
		{
			id: 3,
			slug: "decove-app",
			imgSrc: DecoveApp,
			title: "Décove",
			description:
				"Tired of lugging heavy bags home from the grocery store? Let us do the heavy lifting!",
			link: "https://drive.google.com/drive/folders/188ARqYiZJDo2EwklZiVD9PqfmvW8lUrM?usp=sharing",
			tech: ["Flutter", "Google Map"],
			walkthrough: {
				id: "decove",
				title: "Decove - Local Services Marketplace",
				elevatorPitch:
					"Led development of a Flutter-based marketplace app connecting users with local services through map integration and secure payments",

				sections: [
					{
						title: "The Challenge",
						content: {
							problem:
								"Existing platforms lacked real-time service discovery, integrated payments, and location-based filtering - leading to fragmented user experiences.",
							goals: [
								"Create unified marketplace with live location tracking",
								"Implement in-app payments with PCI compliance",
								"Develop intelligent search with geo-fencing",
								"Achieve <2s loading time for service listings",
								"Support 50k+ concurrent users",
							],
						},
					},
					{
						title: "My Role & Team Leadership",
						content: {
							role: "Technical Lead & Project Manager",
							contributions: [
								"Architected Flutter layered architecture (presentation > business logic > data)",
								"Coordinated 8-member cross-functional team (4 devs, 2 QA, 1 designer, 1 DevOps)",
								"Implemented CI/CD pipeline reducing deployment time by 40%",
								"Conducted bi-weekly code reviews maintaining 98% code quality",
								"Mentored junior developers in clean architecture patterns",
							],
							metrics: {
								performance: "1.8s average API response time",
								reliability: "99.95% uptime in first 6 months",
								adoption: "4.7/5 Play Store rating (8k+ reviews)",
							},
						},
					},
					{
						title: "Core Features",
						content: {
							architecture: {
								frontend: "Flutter (Dart) + Bloc State Management",
								mapping: "Google Maps Platform + Geoflaking",
								payments: "Stripe SDK with Custom UI Elements",
								search: "ElasticSearch + Location-based Ranking",
								backend: "Node.js + Firebase Firestore",
							},
							features: [
								{
									name: "Smart Map Integration",
									icon: "🗺️",
									components: [
										"Real-time service provider tracking",
										"15km radius geo-fencing",
										"Cluster markers for dense areas",
										"Offline map caching",
									],
									implementation: {
										tech: [
											"Google Maps SDK",
											"Geolocator Package",
											"Mapbox GL Native",
											"Offline First Strategy",
										],
									},
									metrics: {
										loadTime: "1.2s initial render",
										accuracy: "5m radius precision",
										efficiency: "40% memory reduction",
									},
								},
								{
									name: "Payment System",
									icon: "💳",
									components: [
										"Stripe Connect integration",
										"PCI-compliant tokenization",
										"Multi-currency support",
										"Instant payout system",
									],
									implementation: {
										tech: [
											"Stripe SDK",
											"Firebase Cloud Functions",
											"Payment State Machine",
											"3D Secure Auth",
										],
									},
									metrics: {
										successRate: "99.1%",
										processingTime: "2.3s avg",
										chargebacks: "<0.5%",
									},
								},
								{
									name: "Search Engine",
									icon: "🔍",
									components: [
										"Type-ahead suggestions",
										"Geo-fenced results",
										"Relevance scoring",
										"Search analytics",
									],
									implementation: {
										tech: [
											"ElasticSearch",
											"Haversine Formula",
											"TF-IDF Ranking",
											"Search-as-a-Service",
										],
									},
									metrics: {
										latency: "720ms avg",
										accuracy: "92% relevance",
										conversions: "35% increase",
									},
								},
							],
						},
					},
					{
						title: "Key Challenges & Solutions",
						content: {
							challenges: [
								{
									problem: "Map performance degradation with 500+ markers",
									solution:
										"Implemented marker clustering and quad-tree spatial partitioning",
									result: "60% FPS improvement on low-end devices",
								},
								{
									problem: "Payment dispute handling",
									solution: "Built escrow system with smart release conditions",
									result: "Reduced chargebacks by 75%",
								},
								{
									problem: "Search relevance across geo-zones",
									solution: "ElasticSearch custom scoring + Haversine formula",
									result: "35% increase in booking conversion",
								},
							],
						},
					},
				],
			},
		},
	],
};




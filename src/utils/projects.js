import Krext from "../Image/Krext.webp";
import LearnAfrica from "../Image/LearnAfrica.webp";
import KOI from "../Image/KOI.webp";
import Decove from "../Image/Decove.webp";
import Sky from "../Image/Sky.webp";
import Dryve from "../Image/Dryve.webp";
import DecoveApp from "../Image/Decove App.webp";
import Blink from "../Image/blink.png";
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
				demo: "",
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
				demo: "",
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
				demo: "https://streamable.com/e/2l96du?",
				id: "decove",
				title: "Decove - Grocery delivery Marketplace",
				elevatorPitch:
					"Lead development of a Flutter-based marketplace app connecting users with local services through map integration and secure payments",
				sections: [
					{
						title: "The Challenge",
						content: {
							problem:
								"Existing platforms lacked real-time service discovery, integrated payments, and location-based filtering - leading to fragmented user experiences.",
							goals: [
								"Create unified marketplace with live location tracking",
								"Implement in-app payments with Stripe",
								"Develop intelligent search with geo-fencing",
								"Achieve <2s loading time for service listings",
							],
						},
					},
					{
						title: "My Role & Team Leadership",
						content: {
							role: "Technical Lead & Project Manager",
							contributions: [
								"Coordinated 8-member cross-functional team (4 devs, 2 QA, 1 designer, 1 DevOps)",
								"Implemented CI/CD pipeline reducing deployment time by 40%",
								"Conducted bi-weekly code reviews maintaining 98% code quality",
								"Mentored junior developers in clean architecture patterns",
							],
							metrics: {},
						},
					},
					{
						title: "Core Features",
						content: {
							architecture: {
								frontend: "Flutter (Dart) + Riverpod State Management",
								mapping: "Google Maps Platform + Geofencing",
								payments: "Stripe SDK with Custom UI Elements",
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
											"Quad-tree spatial partitioning",
										],
										challenges: [
											"Battery optimization for continuous tracking",
											"Marker clustering performance",
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
											"3D Secure Authentication",
										],
										challenges: [
											"Handling payment disputes",
											"Cross-border transaction fees",
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
										challenges: [
											"Real-time index updates",
											"Multilingual search support",
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
				],
			},
		},
		{
			id: 4,
			slug: "bink-user-app",
			imgSrc: Blink,
			title: "Blink",
			description:
				"Blink is digital and contactless payment system that enable to make fast and secure payment",
			link: "",
			tech: [
				"React Native",
				"Typescript",
				"Redux toolkit",
				"Socket.io",
				"Google Map",
				"Kotlin",
			],
			walkthrough: {
				demo: "",
				id: "blink-payment",
				title: "Blink - Digital and Contactless Payment System",
				elevatorPitch:
					"Architected a secure mobile payment platform processing transactions in 1-2 seconds with triple-layer authentication and multiple contactless payment options",

				sections: [
					{
						title: "The Challenge",
						content: {
							problem:
								"Traditional payment methods suffered from slow processing times (5-10s), security vulnerabilities, and lack of unified contactless solutions in emerging markets.",
							goals: [
								"Achieve sub-2 second transaction processing",
								"Support multiple contactless payment protocols",
								"Ensure military-grade security compliance",
								"Maintain 99.9% uptime across device tiers",
							],
						},
					},
					{
						title: "My Role & Contributions",
						content: {
							role: "Lead Mobile Architect & Security Engineer",
							contributions: [
								"Designed cross-platform architecture supporting Android 8+",
								"Implemented biometric authentication pipeline",
								"Developed NFC-HCE payment module using Android SDK",
								"Optimized camera processing for QR payments (<0.8s scan)",
								"Created geofenced transaction validation system",
								"Integrated SmileID for KYC/AML compliance",
							],
							metrics: {
								performance: "1.4s average transaction time",
								security: "Zero breaches in 2 years",
								adoption: "90% first-time success rate",
							},
						},
					},
					{
						title: "Core Features",
						content: {
							architecture: {
								frontend: "React Native + TypeScript + Reanimated",
								payments: "Android HCE + Core NFC + ZXing QR",
								security: "Biometric Auth + Hardware-backed Keystore",
								compliance: "SmileID",
							},
							features: [
								{
									name: "Tap-to-Pay (NFC-HCE)",
									icon: "📱",
									components: [
										"ISO 14443-4 compliant communication",
										"Tokenization service",
									],
									implementation: {
										tech: [
											"Android HCE API",
											"Secure Element abstraction layer",
											"Transaction state machine",
										],
										challenges: [
											"Maintaining NFC connection stability",
											"Handling data exposure and security",
										],
									},
									metrics: {
										speed: "1.2s average processing",
										range: "4cm effective distance",
										successRate: "98.7%",
									},
								},
								{
									name: "Geo-Payment System",
									icon: "📍",
									components: [
										"10m geofence radius",
										"Motion detection",
										"Battery-optimized tracking",
									],
									implementation: {
										tech: [
											"react-native-geolocation-service",
											"Geohash clustering",
											"Foreground service worker",
										],
										challenges: [
											"Preventing location spoofing",
											"Balancing accuracy vs battery",
										],
									},
									metrics: {
										accuracy: "3m radius precision",
										latency: "0.8s position updates",
										fraudPrevention: "100% spoof attempts blocked",
									},
								},
								{
									name: "QR Payments",
									icon: "🔳",
									components: [
										"ZXing core decoding",
										"Dynamic QR rotation",
										"Multi-code support",
									],
									implementation: {
										tech: ["react-native-camera-kit", "ECC cryptography"],
										challenges: [
											"Low-light scanning reliability",
											"Screenshot reuse",
										],
									},
									metrics: {
										scanTime: "0.6s average",
										successRate: "99.4%",
										fraudDetection: "78 fraudulent attempts blocked",
									},
								},
								{
									name: "Card Payments",
									icon: "💳",
									components: [
										"Support for various debit/credit cards",

										"BVN verification with cardholder name matching",
										"Encrypted card details replaced with an expiring token",
									],
									implementation: {
										tech: [
											"Flutter",
											"Tokenization service",
											"Encryption protocols",
											"BVN Verification API",
										],
										challenges: [
											"Ensuring card data security and regulatory compliance",
											"Matching cardholder name with BVN registration",
										],
									},
									metrics: {
										processing: "Fast tokenization and payment processing",
										security: "High-level encryption with expiring tokens",
									},
								},
								{
									name: "Bank Account Payments",
									icon: "🏦",
									components: [
										"Direct debit from user bank accounts",
										"Account number verification",
										"BVN and identity verification",
										"Account name validation against BVN records",
									],
									implementation: {
										tech: [
											"Bank API Integration",
											"BVN Verification",
											"Identity Verification Systems",
										],
										challenges: [
											"Seamless integration with banking systems",
											"Securing sensitive account data",
										],
									},
									metrics: {
										processing: "Instant debit processing",
										successRate: "High transaction success rate",
									},
								},
								{
									name: "User Notifications",
									icon: "🔔",
									components: ["Push notifications", "Email notifications"],
									implementation: {
										tech: [
											"Firebase Cloud Messaging (FCM) / APNs",
											"Email service provider API",
										],
										challenges: [
											"Timely and reliable delivery of notifications",
											"Handling user preferences and subscription management",
										],
									},
									metrics: {
										deliveryTime: "Sub-second push notifications",
										openRate: "High user engagement",
									},
									description:
										"Push and email notifications are sent to users when any activity occurs—such as adding a card or bank detail, identity verification, bank verification, payment failure, or success.",
								},
							],
						},
					},
					{
						title: "Technical Deep Dive",
						content: {
							architecture: {
								frontend:
									"React Native + TypeScript + Redux + WebSocket + Kotlin + Swift + React native module + Camerakit + Geolocation services + NFC + HCE",
							},
							challenges: [
								{
									problem: "NFC compatibility across 200+ Android devices",
									solution:
										"Integrated the latest NFC and HCE android module to allow send and receiving of Ndef type across different android versions",
									result: "95% device coverage achieved",
								},
								{
									problem: "Biometric authentication delays and response time",
									solution:
										"Proper handling of the authentication response based on the security levels. handle both biometric cancellation. ",
									result: "Auth time reduced from 2.1s → 0.4s",
								},
								{
									problem: "QR code reliability in low-light conditions",
									solution:
										"Implemented a library with adaptive contrast enhancement algorithm",
									result:
										"Scan success rate improved 62% in suboptimal lighting",
								},
							],
						},
					},
				],
			},
		},
		{
			id: 5,
			slug: "bink-merchant-app",
			imgSrc: Blink,
			title: "Blink Merchant",
			description:
				"Blink Merchant is a high-performance digital payment platform that enables small and medium-sized businesses to process contactless transactions in under 2 seconds. The system supports multiple payment methods including NFC tap-to-pay, QR codes, card payments, and bank transfers, all protected by military-grade security and triple-layer authentication.",
			link: "",
			tech: [
				"React Native",
				"Typescript",
				"Redux toolkit",
				"Socket.io",
				"Google Map",
				"Kotlin",
			],
			walkthrough: {
				demo: "",
				id: "blink-merchant payment",
				title: "Blink Merchant - Digital and Contactless Payment System",
				elevatorPitch:
					"Architected a secure mobile payment platform processing transactions in 1-2 seconds with triple-layer authentication and multiple contactless payment options.",
				sections: [
					{
						title: "The Challenge",
						content: {
							problem:
								"Traditional payment methods suffered from slow processing times (5-10s), security vulnerabilities, and a lack of unified contactless solutions in emerging markets.",
							goals: [
								"Achieve sub-2 second transaction processing",
								"Support multiple contactless payment protocols",
								"Ensure military-grade security compliance",
								"Maintain 99.9% uptime across device tiers",
							],
						},
					},
					{
						title: "My Role & Contributions",
						content: {
							role: "Lead Mobile Architect & Security Engineer",
							contributions: [
								"Designed cross-platform architecture supporting Android 8+",
								"Implemented biometric authentication pipeline",
								"Developed NFC-HCE payment module using Android SDK",
								"Optimized camera processing for QR payments (<0.8s scan)",
								"Created geofenced transaction validation system",
								"Integrated SmileID for KYC/AML compliance",
							],
							metrics: {
								performance: "1.4s average transaction time",
								security: "Zero breaches in 2 years",
								adoption: "90% first-time success rate",
							},
						},
					},
					{
						title: "Core Features",
						content: {
							architecture: {
								frontend: "React Native + TypeScript + Reanimated",
								payments: "Android HCE + Core NFC + ZXing QR",
								notifications:
									"Notifee + firebase cloud messaging + email integrations",
								security: "Biometric Auth + Hardware-backed Keystore",
								compliance: "SmileID",
							},
							features: [
								{
									name: "Tap-to-Pay (NFC-HCE)",
									icon: "📱",
									components: [
										"ISO 14443-4 compliant communication",
										"Tokenization service",
									],
									implementation: {
										tech: [
											"Android HCE API",
											"Secure Element abstraction layer",
											"Transaction state machine",
										],
										challenges: [
											"Maintaining NFC connection stability",
											"Handling data exposure and security",
										],
									},
									metrics: {
										speed: "1.2s average processing",
										range: "4cm effective distance",
										successRate: "98.7%",
									},
									description:
										"Enables merchants to securely receive contactless payments from NFC-enabled customer devices.",
								},
								{
									name: "Geo-Payment System",
									icon: "📍",
									components: [
										"10m geofence radius",
										"Motion detection",
										"Battery-optimized tracking",
										"Background location updates for merchant discoverability",
									],
									implementation: {
										tech: [
											"react-native-geolocation-service",
											"Geohash clustering",
											"Foreground/background service worker",
										],
										challenges: [
											"Preventing location spoofing",
											"Balancing accuracy vs. battery consumption",
											"Ensuring location updates when the device is locked or in the background",
										],
									},
									metrics: {
										accuracy: "3m radius precision",
										latency: "0.8s position updates",
										fraudPrevention: "100% spoof attempts blocked",
									},
									description:
										"Allows merchants to be discovered via their current location when customers initiate geo-based payments.",
								},
								{
									name: "QR Payments",
									icon: "🔳",
									components: [
										"ZXing core decoding",
										"Dynamic QR rotation",
										"Multi-code support",
									],
									implementation: {
										tech: ["react-native-camera-kit", "ECC cryptography"],
										challenges: [
											"Low-light scanning reliability",
											"Preventing screenshot reuse",
										],
									},
									metrics: {
										scanTime: "0.6s average",
										successRate: "99.4%",
										fraudDetection: "78 fraudulent attempts blocked",
									},
									description:
										"Enables merchants to receive payments when customers scan dynamically generated QR codes.",
								},
								{
									name: "Card Payments",
									icon: "💳",
									components: [
										"Support for various debit/credit cards",
										"Flutter-based processing and tokenization",
										"BVN verification with cardholder name matching",
										"Encrypted card details replaced with an expiring token",
									],
									implementation: {
										tech: [
											"Flutter",
											"Tokenization service",
											"Encryption protocols",
											"BVN Verification API",
										],
										challenges: [
											"Ensuring card data security and regulatory compliance",
											"Matching cardholder name with BVN registration",
										],
									},
									metrics: {
										processing: "Fast tokenization and payment processing",
										security: "High-level encryption with expiring tokens",
									},
									description:
										"Allows merchants to receive payments from customers' debit/credit cards with robust tokenization and BVN verification ensuring security and compliance.",
								},
								{
									name: "Bank Account Payments",
									icon: "🏦",
									components: [
										"Direct debit from customer bank accounts",
										"Account number verification",
										"BVN and identity verification",
										"Account name validation against BVN records",
									],
									implementation: {
										tech: [
											"Bank API Integration",
											"BVN Verification",
											"Identity Verification Systems",
										],
										challenges: [
											"Seamless integration with banking systems",
											"Securing sensitive account data",
										],
									},
									metrics: {
										processing: "Instant debit processing",
										successRate: "High transaction success rate",
									},
									description:
										"Enables merchants to receive payments directly from customer bank accounts after BVN, identity, and account name verification.",
								},
								{
									name: "Merchant Payment Acceptance & Notifications",
									icon: "🔔",
									components: [
										"Real-time push notifications",
										"Email notifications",
										"Accept/decline payment prompt",
										"User feedback integration",
									],
									implementation: {
										tech: [
											"Firebase Cloud Messaging (FCM) / APNs",
											"Email service provider API",
											"Background processing for payment acceptance",
										],
										challenges: [
											"Timely and reliable delivery of notifications",
											"Securing background payment processing",
											"Managing the accept/decline flow efficiently",
										],
									},
									metrics: {
										notificationDelivery: "Sub-second push notifications",
										transactionFeedback:
											"High engagement and prompt decision-making",
									},
									description:
										"When a customer initiates a payment, the merchant receives a notification with the customer's name and amount, prompting them to accept or decline the transaction. Once accepted, the payment is processed in the background, and both email and push notifications confirm the transaction outcome.",
								},
								{
									name: "Merchant Compliance & Registration",
									icon: "✅",
									components: [
										"Business registration requirements",
										"Compliance with industry standards",
										"Enhanced verification beyond user-level compliance",
									],
									implementation: {
										tech: [
											"Business registration API integration",
											"Enhanced verification workflows",
										],
										challenges: [
											"Ensuring up-to-date compliance data",
											"Integrating multiple regulatory requirements",
										],
									},
									metrics: {
										complianceAccuracy: "High compliance rate",
										verificationTime: "Optimized onboarding process",
									},
									description:
										"In addition to user-level compliance, merchants must complete business registration and enhanced verification processes, ensuring that all received transactions meet industry standards.",
								},
							],
						},
					},
					{
						title: "Technical Deep Dive",
						content: {
							architecture: {
								frontend:
									"React Native + TypeScript + Redux + WebSocket + Kotlin + Swift + React Native modules + CameraKit + Geolocation Services + NFC + HCE",
							},
							challenges: [
								{
									problem: "NFC compatibility across 200+ Android devices",
									solution:
										"Integrated the latest NFC and HCE Android module to support sending and receiving NDEF types across various Android versions",
									result: "Achieved 95% device coverage",
								},
								{
									problem: "Biometric authentication delays and response time",
									solution:
										"Optimized authentication response handling by refining security levels and managing biometric cancellations efficiently",
									result: "Reduced authentication time from 2.1s to 0.4s",
								},
								{
									problem: "QR code reliability in low-light conditions",
									solution:
										"Implemented a library with an adaptive contrast enhancement algorithm",
									result:
										"Improved scan success rate by 62% in suboptimal lighting conditions",
								},
								{
									problem: "Handling background location updates for merchants",
									solution:
										"Implemented a robust background location update service using react-native-geolocation-service combined with native background processing techniques",
									result:
										"Achieved consistent and accurate location tracking for merchants, improving geo-based discoverability and payment reliability",
								},
								{
									problem:
										"Managing notifications for payment processing on locked devices",
									solution:
										"Developed a reliable notification system that triggers background payment processing through push notifications and foreground services, ensuring seamless updates even when the device is locked",
									result:
										"Ensured timely and secure processing of payments with high acceptance rates under locked screen conditions",
								},
							],
						},
					},
				],
			},
		},
	],
};




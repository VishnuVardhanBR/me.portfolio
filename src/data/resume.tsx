import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Vishnu Vardhan Reddy",
	initials: "VVR",
	url: "https://me.vishnuvardhanbr.com",
	location: "Hyderabad, India",
	locationLink: "https://www.google.com/search?q=hyderabad",
	description:
		"I love building scalable and efficient applications to solve problems. Currently looking for full-time opportunities as a Software Developer.",
	summary:
		"I'm passionate about building impactful solutions for real-world problems. In the past year, I collaborated with a team of four and a mental health expert to develop Serenity Harbor, an OpenAI-powered application for assistance. I've also made contributions to Sugarizer, an open-source education platform. My experience spans various projects, including creating a full-stack app for file storage, developing a Chrome extension for LLM-based job application auto-fill, and building a beautiful landing page for a business. \n\n I've worked on fun projects too, like an Alexa skill for coding contest notifications and a Discord bot for playing lofi music 😉 I love participating in hackathons to challenge myself. One of my proudest achievements was mentoring 125 students, helping them sharpen their skills in problem-solving, data structures, and algorithms. I'm always excited to explore new platforms and technologies!",
	avatarUrl: "/me.jpeg",
	skills: [
		"C++",
		"React",
		"Next.js",
		"Javascript",
		"Node.js",
		"Python",
		"Java",
		"Express.js",
		"Flask",
		"MySQL",
		"MongoDB",
		"Firebase",
		"AWS",
	],
	navbar: [
		{ href: "https://www.vishnuvardhanbr.com/", icon: HomeIcon, label: "Home" },
	],
	contact: {
		email: "vv.bheemreddy@gmail.com",
		// tel: "+91 7093524040",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/VishnuVardhanBR",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/vishnuvardhanbr/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "",
				icon: Icons.x,

				navbar: false,
			},
			Youtube: {
				name: "Youtube",
				url: "",
				icon: Icons.youtube,
				navbar: false,
			},
			Email: {
				name: "Send Email",
				url: "mailto:vv.bheemreddy@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
			Resume: {
				name: "Resume",
				url: "https://firebasestorage.googleapis.com/v0/b/portfolio-bd380.appspot.com/o/20881A0571%20-%20B.%20Vishnu%20Vardhan%20Reddy.pdf?alt=media&token=cce4f42f-da8e-4d78-987a-dcbf12fbacf3",
				icon: Icons.resume,

				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Salesforce",
			href: "https://salesforce.com",
			badges: [],
			location: "Hyderabad",
			title: "Associate Technical Support Engineer",
			logoUrl: "/salesforce.png",
			start: "August 2024",
			end: "Present",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
		{
			company: "Salesforce",
			badges: [],
			href: "https://salesforce.com",
			location: "Hyderabad",
			title: "Intern",
			logoUrl: "/salesforce.png",
			start: "February 2024",
			end: "July 2024",
			description:
				"Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
		},
		{
			company: "SugarLabs",
			href: "https://www.sugarlabs.org/",
			badges: [],
			location: "Remote",
			title: "Open Source Contributor",
			logoUrl: "/sugarlabs.png",
			start: "December 2023",
			end: "April 2024",
			description:
				"Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
		},
		{
			company: "Smart Interviews",
			href: "https://smartinterviews.in/",
			badges: [],
			location: "Hyderabad",
			title: "Mentor",
			logoUrl: "/smartinterviews.png",
			start: "October 2023",
			end: "January 2024",
			description:
				"Mentored and guiding a batch of 125 students, sharpening their skills in problem solving, data structures, and algorithms.",
		},
	],
	education: [
		{
			school: "Vardhaman College of Engineering",
			href: "https://vardhaman.org/",
			degree: "Bachelor's of Technology in Computer Science and Engineering",
			logoUrl: "/vardhaman.png",
			start: "2020",
			end: "2024",
		},
	],
	projects: [
		{
			title: "ApplyGPT",
			href: "https://applygpt.vishnuvardhanbr.com",
			dates: "June 2024 - July 2024",
			active: true,
			description:
				"Frustrated with manually filling data in job applications, I decided to build a chrome extension powered by ChatGPT API which allows to contextually generate relevant data for the required fields in an application.",
			technologies: [
				"Next.js",
				"Javascript",
				"OpenAI API",
				"TailwindCSS",
				"Shadcn UI",
			],
			links: [
				{
					type: "Website",
					href: "https://applygpt.vishnuvardhanbr.com",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Chrome Web Store",
					href: "https://chromewebstore.google.com/detail/applygpt-beta/gpfdbolbomlaomkbkafaohipanopgmhn",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://firebasestorage.googleapis.com/v0/b/me-portfolio-bd380.appspot.com/o/applygpt.mp4?alt=media&token=e424ddf9-9a6d-45aa-80f8-c8797afa73b8",
		},
		{
			title: "Serenity Harbor",
			href: "https://serenityharbor.live",
			dates: "Dec 2023 - Apr 2024",
			active: true,
			description:
				"Led the creation of an AI-powered mental health chatbot platform, with the help of a $2,500 grant from OpenAI.",
			technologies: [
				"React.js",
				"MongoDB",
				"Flask",
				"Python",
				"OpenAI API",
				"Fine-tuning LLM",
			],
			links: [
				{
					type: "Website",
					href: "https://serenityharbor.live",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/VishnuVardhanBR/serenity-harbor",
					icon: <Icons.github className="size-3" />,
				},
				{
					type: "Product Pitch",
					href: "https://www.youtube.com/watch?v=5T8ZejODr3g",
					icon: <Icons.youtube className="size-3" />,
				},
			],
			image: "",
			video:
				"https://firebasestorage.googleapis.com/v0/b/me-portfolio-bd380.appspot.com/o/serenity.mp4?alt=media&token=fa9099f9-6904-4f4a-9cfb-9aa4f331dd6a",
		},
		{
			title: "Rowin Roceao",
			href: "https://www.rowin-roceao.com/",
			dates: "October 2023 - November 2023",
			active: true,
			description: "Designed a clean landing page for a business.",
			technologies: ["React.js", "Javascript"],
			links: [
				{
					type: "Website",
					href: "https://www.rowin-roceao.com",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/VishnuVardhanBR/rowin",
					icon: <Icons.github className="size-3" />,
				},
			],
			image:
				"https://firebasestorage.googleapis.com/v0/b/me-portfolio-bd380.appspot.com/o/www.rowin-roceao.com_.png?alt=media&token=2f9630b1-0ff4-47f9-a2af-dff12fa728c9",
			video: "",
		},
		{
			title: "Fyles",
			href: "https://youtu.be/jUkETX8oiUo",
			dates: "October 2023 - November 2023",
			active: true,
			description:
				"Implemented a cloud storage application aimed for small groups to access shared storage hosted on AWS S3.",
			technologies: [
				"React.js",
				"Express.js",
				"AWS S3",
				"MongoDB",
				"TailwindCSS",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/VishnuVardhanBR/fyles",
					icon: <Icons.github className="size-3" />,
				},
				{
					type: "Video Demo",
					href: "https://youtu.be/jUkETX8oiUo",
					icon: <Icons.youtube className="size-3" />,
				},
			],
			image:
				"https://firebasestorage.googleapis.com/v0/b/me-portfolio-bd380.appspot.com/o/fyles.png?alt=media&token=2854ce49-a1ef-42ac-a2c2-6835c62130e2",
			video: "",
		},
	],
	hackathons: [
		{
			title: "Megathon",
			dates: "October 28th - 29th, 2023",
			location: "International Institute of Information Technology, Hyderabad",
			description:
				"Devised an sophisticated solution to assess candidate personalities by analyzing Twitter profiles and employing voice/speech analysis techniques.",
			image: "",
			links: [],
		},
		{
			title: "Hack The North",
			dates: "September 14th - 16th, 2018",
			location: "Waterloo, Ontario",
			description:
				"Developed a mobile application which delivers university campus wide events in real time to all students.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
			links: [],
		},
		{
			title: "FirstNet Public Safety Hackathon",
			dates: "March 23rd - 24th, 2018",
			location: "San Francisco, California",
			description:
				"Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
			icon: "public",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
			links: [],
		},
		{
			title: "DeveloperWeek Hackathon",
			dates: "February 3rd - 4th, 2018",
			location: "San Francisco, California",
			description:
				"Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
			links: [
				{
					title: "Github",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/cryptotrends/cryptotrends",
				},
			],
		},
		{
			title: "HackDavis",
			dates: "January 20th - 21st, 2018",
			location: "Davis, California",
			description:
				"Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
			win: "Best Data Hack",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/my6footprint",
				},
				{
					title: "ML",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/my6footprint-machine-learning",
				},
				{
					title: "iOS",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/CarbonWallet",
				},
				{
					title: "Server",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/Wallet6/wallet6-server",
				},
			],
		},
		{
			title: "ETH Waterloo",
			dates: "October 13th - 15th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
			links: [
				{
					title: "Organization",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ethdocnet",
				},
			],
		},
		{
			title: "Hack The North",
			dates: "September 15th - 17th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed a virtual reality application allowing users to see themselves in third person.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Streamer Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/justinmichaud/htn2017",
				},
				{
					title: "Client Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/RTSPClient",
				},
			],
		},
		{
			title: "Hack The 6ix",
			dates: "August 26th - 27th, 2017",
			location: "Toronto, Ontario",
			description:
				"Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ShareShip/ShareShip",
				},
				{
					title: "Site",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://share-ship.herokuapp.com/",
				},
			],
		},
		{
			title: "Stupid Hack Toronto",
			dates: "July 23rd, 2017",
			location: "Toronto, Ontario",
			description:
				"Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/nsagirlfriend/nsagirlfriend",
				},
			],
		},
		{
			title: "Global AI Hackathon - Toronto",
			dates: "June 23rd - 25th, 2017",
			location: "Toronto, Ontario",
			description:
				"Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
			win: "1st Place Winner",
			links: [
				{
					title: "Article",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/TinySamosas/",
				},
			],
		},
		{
			title: "McGill AI for Social Innovation Hackathon",
			dates: "June 17th - 18th, 2017",
			location: "Montreal, Quebec",
			description:
				"Developed realtime facial microexpression analyzer using AI",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
			links: [],
		},
		{
			title: "Open Source Circular Economy Days Hackathon",
			dates: "June 10th, 2017",
			location: "Toronto, Ontario",
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
			win: "1st Place Winner",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/genecis",
				},
			],
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: "May 19th - 21st, 2017",
			location: "International",
			description: "Improved PocketDoc and submitted to online competition",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
			win: "Top 10 Finalist | Honourable Mention",
			links: [
				{
					title: "Medium Article",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
				},
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/pocketdoc-react-native",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/pocketdoc-react-native",
				},
			],
		},
		{
			title: "HackMining",
			dates: "May 12th - 14th, 2017",
			location: "Toronto, Ontario",
			description: "Developed neural network to optimize a mining process",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
			links: [],
		},
		{
			title: "Waterloo Equithon",
			dates: "May 5th - 7th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/pocketdoc-react-native",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/pocketdoc-react-native",
				},
			],
		},
		{
			title: "SpaceApps Waterloo",
			dates: "April 28th - 30th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/earthwatch",
				},
			],
		},
		{
			title: "MHacks 9",
			dates: "March 24th - 26th, 2017",
			location: "Ann Arbor, Michigan",
			description:
				"Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/threejs-planes",
				},
			],
		},
		{
			title: "StartHacks I",
			dates: "March 4th - 5th, 2017",
			location: "Waterloo, Ontario",
			description:
				"Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
			win: "1st Place Winner",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source (Mobile)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/recipic-ionic",
				},
				{
					title: "Source (Server)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/recipic-rails",
				},
			],
		},
		{
			title: "QHacks II",
			dates: "February 3rd - 5th, 2017",
			location: "Kingston, Ontario",
			description:
				"Developed a mobile game which enables city-wide manhunt with random lobbies",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source (Mobile)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/human-huntr-react-native",
				},
				{
					title: "Source (API)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/mattBlackDesign/human-huntr-rails",
				},
			],
		},
		{
			title: "Terrible Hacks V",
			dates: "November 26th, 2016",
			location: "Waterloo, Ontario",
			description:
				"Developed a mock of Windows 11 with interesting notifications and functionality",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
				},
			],
		},
		{
			title: "Portal Hackathon",
			dates: "October 29, 2016",
			location: "Kingston, Ontario",
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/UWPortalSDK/crowmark",
				},
			],
		},
	],
} as const;

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
	{
		title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
		description:
			"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
				Guitar
			</div>
		),
	},
	{
		title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
		description:
			"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--emerald-500))] flex items-center justify-center text-white">
				Start Learning Today
			</div>
		),
	},
	{
		title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
		description:
			"Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
				Flute
			</div>
		),
	},
	{
		title: "Live Feedback & Engagement",
		description:
			"Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
				Voilin
			</div>
		),
	},
	{
		title: "Cutting-Edge Curriculum",
		description:
			"Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pik-500),var(--yellow-500))] flex items-center justify-center text-white">
				Feel Calm
			</div>
		),
	},
	{
		title: "Limitless Learning Opportunities",
		description:
			"With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
		content: (
			<div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
				Start Singing
			</div>
		),
	},
];

function WhyChooseUs() {
	return (
		<div className="lg:text-xl">
			<StickyScroll content={musicSchoolContent} />
		</div>
	);
}

export default WhyChooseUs;

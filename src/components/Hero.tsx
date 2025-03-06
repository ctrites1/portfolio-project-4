import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const slides = [
		{
			id: 1,
			title: "Roll Up To Win!",
			subtitle:
				"With MILLIONS of prizes, you'll love your chances to win! *Rules apply.",
			bgColor: "bg-red-600",
			banner: "RRROLL UP TO WIN!",
			image: "/api/placeholder/64/64",
		},
		{
			id: 2,
			title: "Try Our New Blend",
			subtitle: "Smooth and rich flavor you'll love with every sip!",
			bgColor: "bg-red-700",
			banner: "NEW COFFEE",
			image: "/api/placeholder/64/64",
		},
		{
			id: 3,
			title: "Breakfast All Day",
			subtitle: "Enjoy your favorites anytime, anywhere!",
			bgColor: "bg-red-800",
			banner: "ALL DAY",
			image: "/api/placeholder/64/64",
		},
	];

	// Auto-rotate carousel
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => {
		setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};

	const prevSlide = () => {
		setActiveSlide(
			(prevSlide) => (prevSlide - 1 + slides.length) % slides.length
		);
	};

	const goToSlide = (index) => {
		setActiveSlide(index);
	};

	const currentSlide = slides[activeSlide];

	return (
		<div className="relative mx-4 my-4">
			{/* Carousel Slide */}
			<div
				className={`${currentSlide.bgColor} text-white rounded-lg p-4 flex items-center relative overflow-hidden`}
			>
				<div className="z-10">
					<div className="flex items-center">
						<div className="font-bold text-lg uppercase tracking-wider">
							{currentSlide.banner.split(" ").map((word, index) => (
								<React.Fragment key={index}>
									{index > 0 && <br />}
									{word}
								</React.Fragment>
							))}
						</div>
					</div>

					<div className="mt-2">
						<div className="text-xl font-bold">{currentSlide.title}</div>
						<div className="text-sm mt-1">{currentSlide.subtitle}</div>
					</div>
				</div>

				<button
					className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center"
					onClick={nextSlide}
				>
					<ChevronRight size={24} className="text-white" />
				</button>

				<div className="absolute right-8 bottom-0">
					<div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
						<img
							src={currentSlide.image}
							alt="Promotion visual"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Carousel Indicators */}
			<div className="flex justify-center mt-2">
				{slides.map((slide, index) => (
					<button
						key={slide.id}
						onClick={() => goToSlide(index)}
						className={`mx-1 h-2 rounded-full transition-all ${index === activeSlide ? "w-6 bg-red-600" : "w-2 bg-gray-300"}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;

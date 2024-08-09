import { useState } from 'react';
import upArrow from '../assets/up-arrow.svg';
import visitArrow from '../assets/visit-arrow.svg';
import projectOne1 from '../assets/project1-1.png';
import projectOne2 from '../assets/project1-2.png';
import leftArrow from '../assets/left.svg';
import rightArrow from '../assets/right.svg';
import star from '../assets/star.svg';

export default function Project() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            slides: [projectOne1, projectOne2],
            altText: "Project",
            date: "july 2024",
            title: "book-notes",
            description: "A collection of books I have read, with my own summaries and highlights. This project is a practice in using Express.js, EJS templating, connecting to the Open Library API, and PostgreSQL.",
            // if i deployed this project, i'd add another button here
            buttons: [
                {
                    text: "GitHub",
                    link: "https://github.com/bizarrebeam/book-notes",
                    bgColor: "bg-orange",
                    hoverColor: "hover:bg-orange-hover",
                },
            ],
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects[0].slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects[0].slides.length) % projects[0].slides.length);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // used twice here
    const btnHover = "absolute top-1/2 flex items-center justify-center rounded-full bg-yellow border-2 border-black transform -translate-y-1/2 hover:bg-yellow-hover hover:scale-110 transition-transform";

    return (
        <div className="w-full font-fira-code">
            <div className="relative flex items-center">
                <div className="flex items-center justify-center rounded-full border-2 border-black bg-yellow xs:w-[35px] xs:h-[35px] s:w-[45px] s:h-[45px] sm:w-[55px] sm:h-[55px]">
                    <img src={star} alt="Star" className="w-4 h-4" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                    <span className="text-gray-text xs:text-[9px] s:text-[10px] sm:text-[12px]">
                        bizarrebeam&#39;s sharing
                    </span>
                    <h1 className="text-black font-bold xs:text-xl s:text-2xl sm:text-3xl">
                        {'< project / >'}
                    </h1>
                </div>
            </div>

            <div className="relative xs:py-4 xs:px-0 s:py-5 s:px-0 sm:px-12">
                <div className="relative overflow-hidden border-black xs:rounded-xl xs:border s:rounded-2xl s:border-1 sm:rounded-3xl sm:border-2">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {projects[0].slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={projects[0].altText}
                                className="w-full h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className={`${btnHover} left-4 sm:w-[30px] sm:h-[30px] s:w-[25px] s:h-[25px] xs:w-[20px] xs:h-[20px] ${currentSlide === 0 ? 'opacity-50 pointer-events-none' : ''}`}
                        disabled={currentSlide === 0}
                    >
                        <img src={leftArrow} alt="Previous Slide" className="w-3 h-3" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className={`${btnHover} right-4 sm:w-[30px] sm:h-[30px] s:w-[25px] s:h-[25px] xs:w-[20px] xs:h-[20px] ${currentSlide === projects[0].slides.length - 1 ? 'opacity-50 pointer-events-none' : ''}`}
                        disabled={currentSlide === projects[0].slides.length - 1}
                    >
                        <img src={rightArrow} alt="Next Slide" className="w-3 h-3" />
                    </button>
                </div>

                <div className="relative flex justify-center space-x-2 bottom-6 left-1/2 transform -translate-x-1/2">
                    {projects[0].slides.map((_, index) => (
                        <div 
                            key={index}
                            className={`w-[8px] h-[8px] rounded-full transition-all ${
                                currentSlide === index 
                                ? 'bg-black opacity-50 w-[10px] h-[10px]' 
                                : 'bg-gray opacity-50'
                            }`}
                        />
                    ))}
                </div>

                <div className="bg-gray-background mt-4 p-6 xs:rounded-xl s:rounded-2xl sm:rounded-3xl">
                    <div className="flex justify-between">
                        <h1 className="text-black font-bold xs:text-xl s:text-2xl sm:text-3xl">
                            {projects[0].title}
                        </h1>
                        <div className="flex items-end">
                            <p className="text-gray-text font-bold xs:text-xxs s:text-xs sm:text-sm">
                                {projects[0].date}
                            </p>
                        </div>
                    </div>
                    <p className="text-black text-justify xs:mt-2 xs:text-xxs s:mt-3 s:text-xs sm:mt-4 sm:text-sm">
                        {projects[0].description}
                    </p>
                    <div className="flex justify-end space-x-2 xs:gap-2 s:gap-3 sm:gap-4 xs:mt-2 s:mt-3 sm:mt-4">
                        {projects[0].buttons.map((button, btnIndex) => (
                            <a
                                key={btnIndex}
                                href={button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center font-bold transform transition-transform duration-300 scale-100 hover:scale-105 rounded-full border-black ${button.bgColor} ${button.hoverColor} xs:py-1 xs:px-6 xs:text-xxs s:py-1 s:px-7 s:text-xs sm:py-2 sm:px-8 sm:text-sm border xs:border s:border-1 sm:border-2`}
                            >
                                {button.text}
                                <img src={visitArrow} alt="Visit Arrow" className="ml-2 w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center xs:mt-14 xs:mb-14 s:mt-16 s:mb-16 sm:mt-20 sm:mb-20">
                <p className="font-fira-code font-bold xs:text-xxs s:text-xs sm:text-sm">
                    {'{ return `you’ve reached the end!` };'}
                </p>
                <button onClick={scrollToTop} className="group relative inline-block mt-3">
                    <div className="flex items-center justify-center rounded-full bg-yellow border-2 border-black transition-transform duration-300 transform group-hover:bg-yellow-hover group-hover:scale-105 xs:w-[35px] xs:h-[35px] s:w-[45px] s:h-[45px] sm:w-[55px] sm:h-[55px]">
                        <img src={upArrow} alt="Scroll to top" className="w-4 h-4" />
                    </div>
                </button>
            </div>
        </div>
    );
}

import projectOne from '../assets/project-1.png';
import upArrow from '../assets/up-arrow.svg';
import visitArrow from '../assets/visit-arrow.svg';

export default function Project() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const projects = [
        {
            imgSrc: projectOne,
            altText: "Project",
            date: "july 2024",
            title: "bizarrebeam's book corner",
            description: "A collection of books I have read, with my own summaries and highlights. This project is a practice in using Node.js, EJS templating, connecting to the Open Library API, and PostgreSQL.",
            buttons: [
                { text: "GitHub", link: "https://github.com/bizarrebeam/book-notes", bgColor: "bg-orange", hoverColor: "hover:bg-orange-hover" },
            ]
        }
    ];

    return (
        <>
            <div className="font-fira-code text-black w-full max-w-[588px] mx-auto">
                <h1 className="sm:text-3xl s:text-2xl xs:text-xl font-bold sm:mb-4 s:mb-3 xs:mb-2">{'< project / >'}</h1>

                {projects.map((project, index) => (
                    <div key={index} className="sm:text-sm s:text-xs xs:text-xxs sm:rounded-3xl s:rounded-2xl xs:rounded-xl sm:border-2 s:border-1 xs:border border-black bg-white overflow-hidden">
                        <img src={project.imgSrc} alt={project.altText} className="w-full border-b-2 border-black sm:rounded-3xl s:rounded-2xl xs:rounded-xl" />

                        <div className="sm:p-8 s:p-7 xs:p-6">
                            <p className="text-gray-text font-bold sm:text-sm s:text-xs xs:text-xxs">{project.date}</p>
                            <h1 className="sm:text-2xl s:text-xl xs:text-lg font-bold sm:mt-2 s:mt-1 xs:mt-0 sm:mb-4 s:mb-3 xs:mb-2 sm:leading-sm s:leading-s xs:leading-xs">{project.title}</h1>
                            <p className="text-justify sm:mb-4 s:mb-3 xs:mb-2 sm:leading-sm s:leading-s xs:leading-xs">{project.description}</p>

                            <div className="flex justify-end sm:gap-4 s:gap-3 xs:gap-2 sm:mt-6 s:mt-5 xs:mt-4">
                                {project.buttons.map((button, btnIndex) => (
                                    <a
                                        key={btnIndex}
                                        href={button.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`sm:px-4 sm:py-2 s:px-3 s:py-1 xs:px-2 xs:py-1 sm:border-2 s:border-1 xs:border border-black rounded-full ${button.bgColor} font-bold ${button.hoverColor} transform transition-transform duration-300 scale-100 hover:scale-105 inline-flex items-center`}
                                    >
                                        {button.text}
                                        <img src={visitArrow} alt="Visit Arrow" className="inline-block ml-2 w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center sm:mt-20 s:mt-16 xs:mt-14">
                <p className="font-bold font-fira-code sm:text-sm s:text-xs xs:text-xxs">{'{ return `you’ve reached the end!` };'}</p>
                <button onClick={scrollToTop} className="group inline-block mt-3 sm:mb-20 s:mb-16 xs:mb-14 relative">
                    <div className='sm:w-[55px] sm:h-[55px] s:w-[45px] s:h-[45px] xs:w-[35px] xs:h-[35px] rounded-full border-2 border-black bg-yellow group-hover:bg-yellow-hover transition-transform duration-300 transform group-hover:scale-105 flex items-center justify-center'>
                        <img src={upArrow} alt="Scroll to top" className="w-4 h-4" />
                    </div>
                </button>
            </div>


        </>
    );
}

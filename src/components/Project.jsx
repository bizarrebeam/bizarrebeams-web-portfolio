import projectOne from '../assets/project-1.png';
import upArrow from '../assets/up-arrow.svg';

export default function Project() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="font-fira-code text-[#343235] text-[15px] w-full max-w-[588px] mx-auto">

                <h2 className="text-2xl font-bold mb-4">{'< project / >'}</h2>

                <div className="font-fira-code text-[#343235] text-[15px] w-full max-w-[588px] rounded-[24px] border-2 border-[#343235] bg-white overflow-hidden">
                    <img src={projectOne} alt="Project" className="w-full border-b-2 border-[#343235] rounded-[24px]" />

                    <div className="p-8">
                        <p className="text-[#898989] font-bold">july 2024 (continuously updating)</p>
                        <h2 className="text-[30px] text-[#343235] font-bold mt-4 mb-4">bizarrebeam&apos;s book corner</h2>
                        <p className="text-[#343235] text-justify mb-4" style={{ lineHeight: '1.75' }}>
                            A collection of books I have read, with my own summaries and highlights. This project is a practice in using Node.js, EJS templating, connecting to the Open Library API, and PostgreSQL.
                        </p>

                        <div className="flex justify-end gap-4 mt-6">
                            <button className="px-4 py-2 border-2 border-[#343235] rounded-full bg-[#FFC593] text-[#343235] font-bold hover:bg-[#FEB26D] transition ease-in-out duration-300">
                                GitHub
                            </button>
                            <button className="px-4 py-2 border-2 border-[#343235] rounded-full bg-[#FFC593] text-[#343235] font-bold hover:bg-[#FEB26D] transition ease-in-out duration-300">
                                Visit it!
                            </button>
                        </div>

                    </div>
                    
                </div>

            </div>

            <div className="text-center mt-20">
                <p className="font-bold font-fira-code text-[15px]">{'{ return `you’ve reached the end!` };'}</p>
                <button 
                    onClick={scrollToTop} 
                    className="group inline-block mt-3 mb-20"
                >
                    <div className='w-[55px] h-[55px] rounded-full border-2 border-[#343235] bg-[#FBFC94] flex items-center justify-center group-hover:bg-[#FEE24A] transition ease-in-out duration-300'>
                        <img src={upArrow} alt="Scroll to top" className="w-4 h-4" />
                    </div>
                </button>
            </div>

            
        </>

    )
}
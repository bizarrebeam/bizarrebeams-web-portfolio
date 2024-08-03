import cardPhoto from '../assets/card-photo.jpg';
import cardHeading from '../assets/card-heading.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import gmail from '../assets/gmail.svg';


export default function Card() {
    return (
        
        <div className="flex flex-col font-fira-code">
            
            <h1 className="font-bold text-[30px] text-[#343235] mt-20">{'< hello, >'}</h1>
            
            <div className="relative w-full max-w-[588px] bg-gradient-to-b from-white to-[#EFCBD9] border-[#343235] border-t border-l border-b-2 border-r-2 rounded-[24px] mt-4">
                <div className="flex h-[348px] pl-6">

                    <img
                        src={cardPhoto}
                        alt="Profile-Photo"
                        className="w-[160px] h-[230px] border-2 border-[#343235] object-cover"
                        style={{ alignSelf: 'center' }}
                    />

                    <div className="flex flex-col p-6">
                        <img
                            src={cardHeading}
                            alt="Full-Stuck-Developer-Card"
                            className=''
                        />

                    <div className="w-full border-b border-dashed border- border-[#343235] mb-4 mt-2"></div>

                    <div className='grid grid-cols-2 gap-3'>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-400 text-[13px]">NAME</span>
                            <span className="font-bold text-[#343235] text-[15px]">ADELYA AMANDA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-400 text-[13px]">MAJOR</span>
                            <span className="font-bold text-[#343235] text-[15px]">INFORMATION SYSTEM</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-400 text-[13px]">VARSITY</span>
                            <span className="font-bold text-[#343235] text-[15px]">UNIVERSITY OF INDONESIA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-400 text-[13px]">YEAR</span>
                            <span className="font-bold text-[#343235] text-[15px]">2ND YEAR</span>
                        </div>
                    </div>

                    </div>

                </div>
                
            </div>

            <h1 className="font-bold text-[30px] text-[#343235] text-right mt-4">{`< bizarrebeam's here! / >`}</h1>

            <div className="flex space-x-4 mt-3">
                <a href="https://www.linkedin.com/in/adelya-amanda/" target="_blank" rel="noopener noreferrer" className="group">
                    <div className='w-[55px] h-[55px] rounded-full border-2 border-[#343235] bg-[#FBFC94] flex items-center justify-center group-hover:bg-[#FEE24A] transition ease-in-out duration-300'>
                        <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
                    </div>
                </a>
                <a href="https://github.com/bizarrebeam" target="_blank" rel="noopener noreferrer" className="group">
                    <div className='w-[55px] h-[55px] rounded-full border-2 border-[#343235] bg-[#FBFC94] flex items-center justify-center group-hover:bg-[#FEE24A] transition ease-in-out duration-300'>
                        <img src={github} alt="GitHub" className="w-6 h-6" />
                    </div>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adelyaamanda@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
                    <div className='w-[55px] h-[55px] rounded-full border-2 border-[#343235] bg-[#FBFC94] flex items-center justify-center group-hover:bg-[#FEE24A] transition ease-in-out duration-300'>
                        <img src={gmail} alt="Gmail" className="w-6 h-6" />
                    </div>
                </a>
            </div>
            
        </div>

    )
}
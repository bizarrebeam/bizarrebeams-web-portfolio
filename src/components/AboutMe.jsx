import download from '../assets/download.svg';

export default function AboutMe() {
    return (
        <div className="font-fira-code text-[#343235] text-[15px]">
            <div className="relative max-w-[588px] bg-[#D0EBC2] border-2 border-[#343235] rounded-[24px] p-8">
                
                <div className="absolute -top-0.5 -right-0.5 h-[60px] w-[335px] bg-[#B5D8A2] border-[#343235] border-2 flex items-center justify-center rounded-tr-[24px] rounded-bl-[24px] ">
                    <span className="font-bold text-[15px]">{'< get to know me! / >'}</span>
                </div>

                <div className="mt-16 text-justify m-5">
                    <p className="mb-4">
                        Hi, I&apos;m Adel, but online, I go by &apos;bizarrebeam&apos;. As bizarre as it is, I currently have a growing devotion to web development. Starting with frontend, even though executing my own designs is *terribly frustrating*, I&apos;ve discovered fun and *500* moments in backend development as well. So, I guess, you could call me a full-stuck developer!
                    </p>
                    <p>
                        As I live up to my major&apos;s name, I&apos;m also interested in business and everyday-related problems--and that would be a great input for me to create a great output of useful software!
                    </p>
                </div>

                <div className="m-5 mb-0 flex">
                    <a href="/AdelyaAmanda_CV.pdf" download className=" flex justify-center">
                        <button className="flex items-center px-4 py-2 bg-[#B5D8A2] font-bold rounded-full border-[#343235] border-2 transition ease-in-out duration-200 hover:bg-[#9FC993]">
                            <img src={download} alt="Download" className='w-4 h-4 mr-2' />
                            download my cv!
                        </button>
                    </a>
                </div>

            </div>
        </div>

    )
}
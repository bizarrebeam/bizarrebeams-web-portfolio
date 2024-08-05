import download from '../assets/download.svg';

export default function AboutMe() {
    return (
        <div className="font-fira-code text-black sm:text-sm s:text-xs xs:text-xxs">
            <div className="relative max-w-[588px] bg-green sm:border-2 s:border-1 xs:border border-black sm:rounded-3xl s:rounded-2xl xs:rounded-xl sm:p-8 s:p-5 xs:p-2">
                
                <div className="absolute -top-0.5 -right-0.5 sm:h-[60px] sm:w-[335px] s:h-[42.19px] s:w-[235.55px] xs:h-[35.16px] xs:w-[196.88px] bg-green-hover border-black sm:border-2 s:border-1 xs:border flex items-center justify-center sm:rounded-tr-3xl sm:rounded-bl-3xl s:rounded-tr-2xl s:rounded-bl-2xl xs:rounded-tr-xl xs:rounded-bl-xl">
                    <span className="font-bold sm:text-sm s:text-xs xs:text-xxs">{'< get to know me! / >'}</span>
                </div>

                <div className="sm:mt-16 s:mt-12 xs:mt-10 text-justify m-5">
                    <p className="mb-4">
                        Hi, I&apos;m Adel, but online, I go by &apos;bizarrebeam&apos;. As bizarre as it is, I currently have a growing devotion to web development. Starting with frontend, even though executing my own designs is *terribly frustrating*, I&apos;ve discovered fun and *500* moments in backend development as well. So, I guess, you could call me a full-stuck developer!
                    </p>
                    <p>
                        As I live up to my major&apos;s name, I&apos;m also interested in business and everyday-related problems--and that would be a great input for me to create a great output of useful software!
                    </p>
                </div>

                <div className="m-5 sm:mb-0 flex">
                    <a href="/AdelyaAmanda_CV.pdf" download className="flex justify-center">
                        <button className="flex items-center px-4 py-2 bg-green-hover font-bold rounded-full border-black sm:border-2 s:border-1 xs:border transition-transform ease-in-out duration-300 transform hover:scale-110 hover:bg-green">
                        <img src={download} alt="Download" className="w-4 h-4 mr-2" />
                        download my cv!
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
}

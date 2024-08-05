import cardPhoto from "../assets/card-photo.jpg";
import cardHeading from "../assets/card-heading.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useRef, useState } from 'react';


const linkTo = [
  {
    href: "https://www.linkedin.com/in/adelya-amanda/",
    imgSrc: linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/bizarrebeam",
    imgSrc: github,
    alt: "GitHub",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adelyaamanda@gmail.com",
    imgSrc: gmail,
    alt: "Gmail",
  },
];

const cardInfo = [
  {
    label: "NAME",
    value: "ADELYA AMANDA"
  },
  {
    label: "MAJOR",
    value: "INFORMATION SYSTEM"
  },
  {
    label: "VARSITY",
    value: "UNIVERSITY OF INDONESIA"
  },
  {
    label: "YEAR",
    value: "2ND YEAR"
  },
];

export default function Card() {
  const cardRef = useRef(null);

  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const [headingOne] = useTypewriter({
    words: ['< hello, >'],
    loop: 1,
    delaySpeed: 2000,
    deleteSpeed: 50,
    onLoopDone: () => setShowHeadingTwo(true),
  });

  const [headingTwo] = useTypewriter({
    words: ["< bizarrebeam's here! />"],
    loop: 1,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 100,
    startDelay: 0,
    onLoopDone: () => setShowCursor(false),
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = -(y - 0.5) * 30;
    const rotateY = (x - 0.5) * 30;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  return (
    <div className="flex flex-col font-fira-code">
      <h1 className="font-bold text-black xs:mt-12 s:mt-16 sm:mt-20 xs:text-xl s:text-2xl sm:text-3xl">
      {headingOne}
      {!showHeadingTwo && showCursor && <Cursor />}
      </h1>

      <div className="relative w-full max-w-[588px] xs:mt-2 s:mt-3 sm:mt-4 perspective-1000" >
        <div
          ref={cardRef}
          className="bg-gradient-to-b from-white to-pink border-black border-t border-l border-b-2 border-r-2 xs:rounded-xl s:rounded-2xl sm:rounded-3xl card-tilt"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            cardRef.current.style.setProperty('--rotateX', '0deg');
            cardRef.current.style.setProperty('--rotateY', '0deg');
          }}
        >
          <div className="flex xs:h-[248px] s:h-[298px] sm:h-[348px] xs:pl-4 s:pl-5 sm:pl-6">
            <img
              src={cardPhoto}
              alt="Profile-Photo"
              className="xs:w-[92.52px] xs:h-[132.98px] s:w-[122.45px] s:h-[176.00px] sm:w-[160px] sm:h-[230px] border-2 border-black object-cover self-center"
            />

            <div className="flex flex-col xs:p-4 s:p-5 sm:p-6 justify-center">
              <img src={cardHeading} alt="Full-Stack-Developer-Card" className="" />

              <div className="w-full border-b border-dashed border-black mt-2 xs:mb-3 s:mb-3 sm:mb-4"></div>

              <div className="grid grid-cols-2 xs:gap-2 s:gap-2 sm:gap-3">
                {cardInfo.map((field) => (
                  <div key={field.label} className="flex flex-col">
                    <span className="text-gray-text xs:text-[9px] s:text-[10px] sm:text-[12px]">
                      {field.label}
                    </span>
                    <span className="font-bold text-black xs:text-xxs s:text-xs sm:text-sm">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-black text-right xs:mt-2 s:mt-3 sm:mt-4 xs:text-xl s:text-2xl sm:text-3xl">
          {headingTwo}
          {showCursor && <Cursor />}
      </h1>

      <div className="flex space-x-4 xs:mt-1 s:mt-2 sm:mt-3">
        {linkTo.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="xs:w-[35px] xs:h-[35px] s:w-[45px] s:h-[45px] sm:w-[55px] sm:h-[55px] rounded-full border-2 border-black bg-[#FBFC94] flex items-center justify-center group-hover:bg-[#FEE24A] transition-transform duration-300 ease-in-out transform group-hover:scale-110">
              <img src={link.imgSrc} alt={link.alt} className="w-4 h-4 s:w-6 s:h-6" />
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}

import barcode from '../assets/barcode.png'

export default function Stacks() {
    return (
        <div className="font-fira-code text-[#343235] text-[15px] w-full max-w-[588px] h-auto p-8 rounded-[24px] border-2 border-[#343235] bg-gradient-to-b from-white to-[#D9D9D9]">
            
            <h2 className="text-2xl font-bold text-center mt-3">{'< stacks i\'ve'}</h2>
            <h2 className="text-2xl font-bold text-center mb-6">{'explored / >'}</h2>
            <div className="border-t-2 border-b-2 border-dashed border-[#343235] my-3 mb-6"></div>

            <div className="flex text-[15px]">
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="h-8"> 
                            <th className="font-normal text-left text-[#898989] w-1/3">TYPE</th>
                            <th className="font-normal text-left text-[#898989] w-2/3">ITEM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-8 mb-4"> 
                            <td className="text-[#898989] font-bold align-top text-left pr-2 pb-2">LANGUAGES</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">JavaScript</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">Java</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">Python</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="h-8 mb-4"> 
                            <td className="text-[#898989] font-bold align-top text-left pr-2 pb-2">FRAMEWORK</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">Express.js</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">TailwindCSS</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">Bootstrap</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="h-8 mb-4"> 
                            <td className="text-[#898989] font-bold align-top text-left pr-2 pb-2">LIBRARY</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">React.js</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">jQuery</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="h-8 mb-4"> 
                            <td className="text-[#898989] font-bold align-top text-left pr-2 pb-2">DATABASE</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">PostgreSQL</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="h-8 mb-4"> 
                            <td className="text-[#898989] font-bold align-top text-left pr-2 pb-2">TOOLS</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    <li className="flex justify-between"><span className="text-[#343235] font-bold">Figma</span><span className="text-[#343235] font-bold flex-grow border-b-2 border-dotted border-[#343235]"></span></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="border-t-2 border-b-2 border-dashed border-[#343235] my-3 mt-6 mb-10"></div>
            <div className="text-center text-[#343235] text-[13px]">... AND WILL KEEP EXPLORING FURTHER!</div>
            <div className="flex justify-center items-center mb-3">
                <img src={barcode} alt="Barcode-Decorator" style={{ alignSelf: 'center' }} className='w-1/2'/>
            </div>
            

        </div>
    )
}

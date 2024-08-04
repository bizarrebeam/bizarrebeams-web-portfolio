import barcode from '../assets/barcode.png';

export default function Stacks() {
    return (
        <div className="w-full max-w-[588px] h-auto sm:p-8 s:p-6 xs:p-4 font-fira-code text-black sm:text-sm s:text-xs xs:text-xxs sm:rounded-3xl s:rounded-2xl xs:rounded-xl border-2 border-black bg-gradient-to-b from-white to-gray">
            <h1 className="sm:text-3xl s:text-2xl xs:text-xl font-bold text-center mt-3">{'< stacks i\'ve'}</h1>
            <h1 className="sm:text-3xl s:text-2xl xs:text-xl font-bold text-center sm:mb-6 s:mb-4 xs:mb-3">{'explored / >'}</h1>
            <div className="sm:border-t-2 sm:border-b-2 s:border-t-1 s:border-b-2 xs:border-t-0 xs:border-b-2 border-dashed border-black sm:my-3 sm:mb-8 s:my-2 s:mb-6 xs:my-1 xs:mb-4"></div>

            <div className="flex sm:text-sm s:text-xs xs:text-xxs">
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="sm:h-8 s:h-7 xs:h-6">
                            <th className="font-normal text-left text-gray-text w-1/3">TYPE</th>
                            <th className="font-normal text-left text-gray-text w-2/3">ITEM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="sm:h-8 s:h-7 xs:h-6 mb-4">
                            <td className="text-gray-text font-bold align-top text-left pr-2 pb-2">LANGUAGES</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    {["JavaScript", "Java", "Python"].map((item) => (
                                        <li key={item} className="flex justify-between">
                                            <span className="text-black font-bold">{item}</span>
                                            <span className="text-black font-bold flex-grow border-b-2 border-dotted border-black"></span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr className="sm:h-8 s:h-7 xs:h-6 mb-4">
                            <td className="text-gray-text font-bold align-top text-left pr-2 pb-2">FRAMEWORK</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    {["Express.js", "TailwindCSS", "Bootstrap"].map((item) => (
                                        <li key={item} className="flex justify-between">
                                            <span className="text-black font-bold">{item}</span>
                                            <span className="text-black font-bold flex-grow border-b-2 border-dotted border-black"></span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr className="sm:h-8 s:h-7 xs:h-6 mb-4">
                            <td className="text-gray-text font-bold align-top text-left pr-2 pb-2">LIBRARY</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    {["React.js", "jQuery"].map((item) => (
                                        <li key={item} className="flex justify-between">
                                            <span className="text-black font-bold">{item}</span>
                                            <span className="text-black font-bold flex-grow border-b-2 border-dotted border-black"></span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr className="sm:h-8 s:h-7 xs:h-6 mb-4">
                            <td className="text-gray-text font-bold align-top text-left pr-2 pb-2">DATABASE</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    {["PostgreSQL"].map((item) => (
                                        <li key={item} className="flex justify-between">
                                            <span className="text-black font-bold">{item}</span>
                                            <span className="text-black font-bold flex-grow border-b-2 border-dotted border-black"></span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr className="sm:h-8 s:h-7 xs:h-6 mb-4">
                            <td className="text-gray-text font-bold align-top text-left pr-2 pb-2">TOOLS</td>
                            <td className="align-top pb-6">
                                <ul className="space-y-2">
                                    {["Figma"].map((item) => (
                                        <li key={item} className="flex justify-between">
                                            <span className="text-black font-bold">{item}</span>
                                            <span className="text-black font-bold flex-grow border-b-2 border-dotted border-black"></span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="sm:border-t-2 sm:border-b-2 s:border-t-1 s:border-b-2 xs:border-t-0 xs:border-b-2 border-dashed border-black sm:my-5 sm:mb-10 s:my-3 s:mb-8 xs:my-2 xs:mb-6"></div>
            <div className="text-center text-black sm:text-sm s:text-xs xs:text-xxs">... AND WILL KEEP EXPLORING FURTHER!</div>
            <div className="flex justify-center items-center mb-3">
                <img src={barcode} alt="Barcode-Decorator" className="w-1/2" />
            </div>
        </div>
    );
}

export default function Experience() {
    const experiences = [
        {
            title: 'Teaching Assistant of Business Management Course',
            place: 'Fasilkom UI',
            date: 'August 2024 - Now',
        },
        {
            title: 'Human Resources of Business-IT Case',
            place: 'COMPFEST16 Fasilkom UI',
            date: 'March 2024 - Now',
        },
        {
            title: 'Mentee of Pekan RISTEK Open Class Web Development SIG',
            place: 'RISTEK Fasilkom UI',
            date: 'November 2023',
        },
        {
            title: 'Frontend Intern at IT Development Department',
            place: 'BEM Fasilkom UI',
            date: 'September - December 2023',
        },
        {
            title: 'Staff of Public Relations and Publications',
            place: 'Wisuda Genap 2023 Fasilkom UI',
            date: 'August 2023 – September 2023',
        },
        {
            title: 'Lead of Graphic Designer',
            place: 'Abstract 71 (SMAN 71 Jakarta)',
            date: 'August 2021- October 2022',
        }
    ];

    return (
        <div className="font-fira-code text-[#343235] text-[15px] w-full max-w-[588px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">{'< experience / >'}</h2>

            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="bg-[#FBFC94] border-2 border-[#FEE24A] rounded-[24px] p-5 mb-4"
                >

                    <div className="font-bold mb-2">
                        {experience.title}
                    </div>

                    <div className="flex justify-between text-gray-500">
                        <div className="font-bold">
                            {experience.place}
                        </div>
                        <div>
                            {experience.date}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
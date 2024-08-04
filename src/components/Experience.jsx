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
            date: 'August – September 2023',
        },
        {
            title: 'Lead of Graphic Designer',
            place: 'Abstract 71 (SMAN 71 Jakarta)',
            date: 'August 2021- October 2022',
        }
    ];

    return (
        <div className="font-fira-code text-black sm:text-sm s:text-xs xs:text-xxs w-full max-w-[588px] mx-auto">
            <h1 className="sm:text-3xl s:text-2xl xs:text-xl font-bold sm:mb-4 s:mb-3 xs:mb-2">{'< experience / >'}</h1>

            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="bg-yellow sm:border-2 s:border-1 xs:border border-yellow-hover sm:rounded-3xl s:rounded-2xl xs:rounded-xl sm:p-5 sm:mb-4 s:p-4 s:mb-3 xs:p-3 xs:mb-2"
                >
                    <div className="font-bold mb-2">
                        {experience.title}
                    </div>

                    <div className="flex justify-between text-gray-text">
                        <div className="font-bold">
                            {experience.place}
                        </div>
                        <div className="text-right">
                            {experience.date}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

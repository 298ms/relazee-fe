import { useState } from "react"
import { Link } from "react-router-dom"

function PartnerCard({ data }: any) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <Link to={'/partner/1'} className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
            <div className="flex flex-row relative w-full justify-center">
                <div className="bg-center bg-cover w-20 aspect-square rounded-md" style={{ backgroundImage: `url(${data.foto})` }}></div>
                <button className="absolute right-0"><i className="bi bi-three-dots-vertical"></i></button>
            </div>
            <div className="flex flex-col text-center">
                <h4 className="font-medium">{data.nama}</h4>
                <span>{data.fakultas}</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-1 flex-wrap">
                {data.skills && data.skills.map((skill: any, i: Number) => (
                    <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">{skill}</span>
                ))}
            </div>
        </Link>
    )
}

export default function MahasiswaPartner() {
    const [filter, setFilter] = useState('semua')
    const dummyPartners = [
        {
            nama: 'Afiqur Rahman',
            fakultas: 'Fasilkom',
            skills: [
                'Backend Developer',
                'Devops Engineer'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
        {
            nama: 'Syah Reza Pahlevi',
            fakultas: 'Fasilkom',
            skills: [
                'Business Analyst',
                'UI/UX Design',
                'Product Design'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
        {
            nama: 'Syah Reza Pahlevi',
            fakultas: 'Fasilkom',
            skills: [
                'Business Analyst',
                'UI/UX Design',
                'Product Design'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
    ]

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-stretch justify-between">
                <div className="flex flex-row items-stretch gap-3">
                    <button
                        onClick={() => setFilter('semua')}
                        className={`rounded-lg px-6 text-sm ${filter == 'semua' ? 'bg-relazee-blue text-white' : 'bg-white text-gray-500'}`}
                    >
                        Semua
                    </button>
                    <button
                        onClick={() => setFilter('terbaru')}
                        className={`rounded-lg px-6 text-sm ${filter == 'terbaru' ? 'bg-relazee-blue text-white' : 'bg-white text-gray-500'}`}
                    >
                        Terbaru
                    </button>
                    <button
                        onClick={() => setFilter('gratis')}
                        className={`rounded-lg px-6 text-sm ${filter == 'gratis' ? 'bg-relazee-blue text-white' : 'bg-white text-gray-500'}`}
                    >
                        Gratis
                    </button>
                </div>
                <button className="bg-white rounded-lg text-gray-500 w-10 aspect-square flex items-center justify-center"><i className="bi bi-sliders"></i></button>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {dummyPartners && dummyPartners.map((partner, index) => (
                    <PartnerCard data={partner} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

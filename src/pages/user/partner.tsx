import { useState } from "react"

function PartnerCard(props: any) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
            <div className="flex flex-row relative w-full justify-center">
                <div className="bg-center bg-cover w-20 aspect-square rounded-md" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <button className="absolute right-0"><i className="bi bi-three-dots-vertical"></i></button>
            </div>
            <div className="flex flex-col text-center">
                <h4 className="font-medium">{props.partner.name}</h4>
                <span>Fasilkom 20</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-1 flex-wrap">
                <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
            </div>
        </div>
    )
}

export default function UserPartner() {
    const [filter, setFilter] = useState('semua')
    const dummyPartner = [
        {
            name: 'Afiqur Rahman'
        },
        {
            name: 'Afiqur Rahman'
        },
        {
            name: 'Afiqur Rahman'
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
                {dummyPartner && dummyPartner.map((partner, index) => (
                    <PartnerCard partner={partner} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

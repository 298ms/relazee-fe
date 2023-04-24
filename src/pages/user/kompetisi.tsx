import KompetisiCard from "../../components/user/kompetisi-card";
import DummyPoster from '../../assets/dummy-poster.png'
import { useState } from "react";

export default function UserKompetisi() {
    const dummyKompetisi = [
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
    ]

    const [filter, setFilter] = useState('semua')

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
                {dummyKompetisi && dummyKompetisi.map((kompetisi, index) => (
                    <KompetisiCard kompetisi={kompetisi} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

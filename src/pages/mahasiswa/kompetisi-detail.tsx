import MahasiswaLayout from "../../components/mahasiswa/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KompetisiCard from "../../components/mahasiswa/kompetisi-card";

import { dummyKompetisi } from "../../data";

export function MahasiswaKompetisiDetailInfo() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Jumlah Tim</h3>
                <span>3-5 orang</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Hadiah</h3>
                <span>Rp 8.000.000</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Biaya Pendaftaran</h3>
                <span>Gratis</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Periode Pendaftaran</h3>
                <span>20 Mei 2023 - 12 Juni 2023</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Kategori</h3>
                <span>Karya Tulis Ilmiah</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Link Pendaftaran</h3>
                <a href="#">unej.id/Lomba-test</a>
            </div>
        </div>
    )
}
export function MahasiswaKompetisiDetailDeskripsi() {
    return (
        <p className="text-gray-500 whitespace-pre-wrap">
            Lorem ipsum dolor sit amet consec te tur. Egestas ligula luctus amet odio sa gittis pharetra sagittis. Orci lacus non tortor et ut nunc venenatis sagittis. Adi piscing proin volutpat tristique cras fri ngilla. Fringilla dis auctor maecenas in teger.
            Consectetur gravida sem integer ut risus aenean eu. Nibh gravida quis maecenas pharetra ornare tortor vive rra. Nibh dignissim pellentesque aliqu am id mauris risus eget. Turpis lectus in semper volutpat mi.
        </p>
    )
}

function DetailMenu() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-3">
            <button className="flex flex-row items-center gap-3">
                <i className="bi bi-clipboard text-sm"></i>
                <span>Salin tautan</span>
            </button>
            <button className="flex flex-row items-center gap-3">
                <i className="bi bi-share-fill text-sm"></i>
                <span>Bagikan</span>
            </button>
            <button className="flex flex-row items-center gap-3">
                <i className="bi bi-bookmark-plus text-sm"></i>
                <span>Simpan</span>
            </button>
        </div>
    )
}

export default function MahasiswaKompetisiDetail() {
    const navigate = useNavigate()

    const [showDetailMenu, setShowDetailMenu] = useState(false)

    const detailMenuRef = useRef<HTMLDivElement>(null)

    const closeDetailMenu = (e: Event) => {
        if (detailMenuRef.current && showDetailMenu && !detailMenuRef.current.contains(e.target as Node)) {
            setShowDetailMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDetailMenu)
    })

    return (
        <MahasiswaLayout>
            <div className="bg-white rounded-lg p-6 flex flex-col gap-5">
                <div className="flex flex-row items-center justify-between relative">
                    <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                    <h2 className="text-gray-500 font-medium text-lg">National Paper Competition HMDEP USU 2022</h2>
                    <button onClick={() => setShowDetailMenu(!showDetailMenu)}><i className="bi bi-three-dots-vertical"></i></button>
                    {showDetailMenu && <div className="absolute top-[100%] right-0" ref={detailMenuRef}><DetailMenu /></div>}
                </div>
                <div className="flex flex-row items-strecth gap-6">
                    <img src={DummyPoster} alt="" className="w-1/2 rounded-md" />
                    <div className="flex flex-col gap-5 w-1/2">
                        <div className="flex flex-row text-center">
                            <NavLink replace to="info" className={({ isActive, isPending }) => `w-full py-2 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-relazee-gray"}`
                            }>Informasi Penting</NavLink>
                            <NavLink replace to="deskripsi" className={({ isActive, isPending }) => `w-full py-2 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-relazee-gray"}`
                            }>Deskripsi</NavLink>
                        </div>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-stretch gap-2">
                    <a href="#" className="bg-relazee-blue rounded-lg p-3 text-white w-full text-center">Daftar Sekarang</a>
                    <a href="#" className="bg-relazee-blue-light rounded-lg text-gray-500 p-3 w-full text-center">Buat Tim</a>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Kompetisi lainnya</h2>
                    <Link to='/more/kompetisi' className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {dummyKompetisi && dummyKompetisi.map((kompetisi, index) => (
                        <KompetisiCard kompetisi={kompetisi} key={index} index={index} />
                    ))}
                </div>
            </div>
        </MahasiswaLayout>
    )
}

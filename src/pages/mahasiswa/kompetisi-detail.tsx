import MahasiswaLayout from "../../components/mahasiswa/layout";
import GemastikLogo from '../../assets/dummy poster/gemastik.png'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KompetisiCard from "../../components/mahasiswa/kompetisi-card";

import { dummyKompetisi } from "../../data";

export function MahasiswaKompetisiDetailInfo() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Jumlah Tim</h3>
                <span>3 orang</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Total Hadiah</h3>
                <span>Rp 240.000.000</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Biaya Pendaftaran</h3>
                <span>Gratis</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Periode Pendaftaran</h3>
                <span>12 Mei 2023 - 12 Juli 2023</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Kategori</h3>
                <div className="flex flex-row flex-wrap gap-2">
                    <span className="bg-relazee-gray rounded-lg px-2">Karya Tulis Ilmiah</span>
                    <span className="bg-relazee-gray rounded-lg px-2">Programming</span>
                    <span className="bg-relazee-gray rounded-lg px-2">Cyber Security</span>
                    <span className="bg-relazee-gray rounded-lg px-2">Bisnis TIK</span>
                    <span className="bg-relazee-gray rounded-lg px-2">Kota Cerdas</span>
                    <span className="bg-relazee-gray rounded-lg px-2">Animasi</span>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray-500 text-xs font-light">Link Pendaftaran</h3>
                <a className="text-relazee-blue" target="_blank" href="https://gemastik.kemdikbud.go.id/">https://gemastik.kemdikbud.go.id/</a>
            </div>
        </div>
    )
}
export function MahasiswaKompetisiDetailDeskripsi() {
    return (
        <p className="text-gray-500 whitespace-pre-wrap">
            GEMASTIK merupakan program Balai Pengembangan Talenta Indonesia, Pusat Prestasi Nasional, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. Program ini ditujukan untuk meningkatkan kompetensi mahasiswa Indonesia, sehingga mampu mengambil peran sebagai agen perubahan dalam memajukan TIK dan pemanfaatannya, baik ketika masih dalam masa studi maupun kelak sesudah lulus studi. Pada tahun ini GEMASTIK digelar untuk ke-16 kalinya dengan tema “TIK untuk Pembangunan Indonesia Maju dan Berkelanjutan”.
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
                    <h2 className="text-gray-500 font-medium text-lg px-7 text-center">Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi 2023</h2>
                    <button onClick={() => setShowDetailMenu(!showDetailMenu)}><i className="bi bi-three-dots-vertical"></i></button>
                    {showDetailMenu && <div className="absolute top-[100%] right-0" ref={detailMenuRef}><DetailMenu /></div>}
                </div>
                <div className="flex flex-row items-strecth gap-6">
                    <img src={GemastikLogo} alt="" className="w-1/2 object-contain rounded-md" />
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
                    <a href="https://gemastik.kemdikbud.go.id/" target="_blank" className="bg-relazee-blue rounded-lg p-3 text-white w-full text-center">Daftar Sekarang</a>
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

import { Link, useNavigate } from "react-router-dom";
import MahasiswaLayout from "../../components/mahasiswa/layout";
import { useEffect, useRef, useState } from "react";
import PartnerCarousel from "../../components/mahasiswa/partner-carousel";
import PartnerCard from "../../components/mahasiswa/partner-card";

import { dummyPartners } from "../../data";

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

export default function MahasiswaPartnerDetail() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

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
            <div className="bg-white rounded-lg p-6 flex flex-col gap-7">
                <div className="flex flex-row items-center justify-between relative">
                    <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                    <h2 className="text-gray-500 font-medium text-lg">Profil</h2>
                    <button onClick={() => setShowDetailMenu(!showDetailMenu)}><i className="bi bi-three-dots-vertical"></i></button>
                    {showDetailMenu && <div className="absolute top-[100%] right-0" ref={detailMenuRef}><DetailMenu /></div>}
                </div>
                <div className="flex flex-row justify-between items-start gap-2">
                    <div className="flex flex-row items-start gap-5">
                        <div className="bg-center bg-cover rounded-full w-32 aspect-square" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                        <div className="flex flex-col">
                            <h2 className="text-lg">Syah Reza Pahlevi</h2>
                            <span className="text-gray-500">@azer_reza</span>
                            <span>Fasilkom 20</span>
                            <a href="#">https://nafis-handoko.com</a>
                            <div className="flex flex-row gap-2 items-stretch mt-3">
                                <button className="rounded-lg px-5 border border-gray-500 bg-transparent flex flex-row items-center justify-center gap-3">
                                    <i className="bi bi-microsoft-teams text-2xl"></i>
                                    Team Invite
                                </button>
                                <button className="rounded-lg px-5 border border-gray-500 bg-transparent flex flex-row items-center justify-center gap-3">
                                    <i className="bi bi-chat-fill"></i>
                                    Chat Request
                                </button>
                                <button className="w-10 aspect-square rounded-lg border border-gray-500 bg-transparent flex items-center justify-center"><i className="bi bi-person-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <img className="w-20" src="http://protan.faperta.unej.ac.id/wp-content/uploads/sites/14/2020/05/logo-unej-300x296.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg">Keahlian</h3>
                    <div className="flex flex-row items-stretch gap-1 flex-wrap">
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">UI/UX Designer</span>
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Leadership</span>
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Product Manager</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-lg">Bio</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus incidunt unde obcaecati maxime odit necessitatibus soluta excepturi nostrum, natus molestias, dicta cumque assumenda pariatur consequuntur facilis nam? Ad, quis dicta!
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Partner lainnya</h2>
                    <Link to='/more/partner' className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></Link>
                </div>
                <PartnerCarousel>
                    {(dummyPartners && dummyPartners.length > 0) && dummyPartners.map((partner, i) => (
                        <PartnerCard data={partner} />
                    ))}
                </PartnerCarousel>
            </div>
        </MahasiswaLayout>
    )
}

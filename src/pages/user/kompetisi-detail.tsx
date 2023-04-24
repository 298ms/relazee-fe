import UserLayout from "../../components/user/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export function UserKompetisiDetailInfo() {
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
export function UserKompetisiDetailDeskripsi() {
    return (
        <p className="text-gray-500 whitespace-pre-wrap">
            Lorem ipsum dolor sit amet consec te tur. Egestas ligula luctus amet odio sa gittis pharetra sagittis. Orci lacus non tortor et ut nunc venenatis sagittis. Adi piscing proin volutpat tristique cras fri ngilla. Fringilla dis auctor maecenas in teger. 
            Consectetur gravida sem integer ut risus aenean eu. Nibh gravida quis maecenas pharetra ornare tortor vive rra. Nibh dignissim pellentesque aliqu am id mauris risus eget. Turpis lectus in semper volutpat mi.
        </p>
    )
}

export default function UserKompetisiDetail() {
    const navigate = useNavigate()

    return (
        <UserLayout>
            <div className="bg-white rounded-lg p-6 flex flex-col gap-5">
                <div className="flex flex-row items-center justify-between">
                    <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                    <h2 className="text-gray-500 font-medium text-lg">National Paper Competition HMDEP USU 2022</h2>
                    <button><i className="bi bi-three-dots-vertical"></i></button>
                </div>
                <div className="flex flex-row items-strecth gap-6">
                    <img src={DummyPoster} alt="" className="w-full rounded-md" />
                    <div className="flex flex-col gap-5 w-full">
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
        </UserLayout>
    )
}

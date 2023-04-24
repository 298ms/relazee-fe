import UserLayout from "../../components/user/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export function UserKompetisiDetailInfo() {
    return (
        <div>Info</div>
    )
}
export function UserKompetisiDetailDeskripsi() {
    return (
        <div>Deskripsi</div>
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
                            <NavLink to="info" className={({ isActive, isPending }) => `w-full py-2 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-relazee-gray"}`
                            }>Informasi Penting</NavLink>
                            <NavLink to="deskripsi" className={({ isActive, isPending }) => `w-full py-2 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-relazee-gray"}`
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

import UserLayout from "../../components/user/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import { useNavigate } from "react-router-dom";

export default function UserKompetisiDetail() {
    const navigate  = useNavigate()

    return (
        <UserLayout>
            <div className="bg-white rounded-lg p-6 flex flex-col gap-5">
                <div className="flex flex-row items-center justify-between">
                    <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                    <h2 className="text-gray-500 font-medium text-lg">National Paper Competition HMDEP USU 2022</h2>
                    <button><i className="bi bi-three-dots-vertical"></i></button>
                </div>
                <div className="flex flex-row items-strecth">
                    <img src={DummyPoster} alt="" className="w-1/2 rounded-md" />
                    <div className="flex flex-col"></div>
                </div>
                <div className="flex flex-row items-stretch gap-2">
                    <a href="#" className="bg-relazee-blue rounded-lg p-3 text-white w-full text-center">Daftar Sekarang</a>
                    <a href="#" className="bg-relazee-blue-light rounded-lg text-gray-500 p-3 w-full text-center">Buat Tim</a>
                </div>
            </div>
        </UserLayout>
    )
}

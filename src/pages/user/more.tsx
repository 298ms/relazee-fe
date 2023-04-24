import { NavLink, Outlet } from 'react-router-dom'
import UserLayout from '../../components/user/layout'

export default function UserMore() {
    return (
        <UserLayout>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-row text-center">
                    <NavLink replace to="partner" className={({ isActive, isPending }) => `w-full py-2 font-medium text-gray-500 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-gray-300"}`
                    }>Partner</NavLink>
                    <NavLink replace to="kompetisi" className={({ isActive, isPending }) => `w-full py-2 font-medium text-gray-500 ${isActive ? "border-b-2 border-relazee-blue" : "border-b border-gray-300"}`
                    }>Kompetisi</NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </UserLayout>
    )
}

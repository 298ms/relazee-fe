import { NavLink } from "react-router-dom"

export default function MahasiswaLeftSidebar(props: any) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className={`bg-white rounded-lg py-8 flex flex-col items-stretch gap-10 w-1/5 ${props.className}`}>
            <div className="flex flex-col items-center">
                <div className="bg-center bg-cover rounded-full w-12 aspect-square" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <span className="text-lg font-medium">Le Minerale</span>
                <a href="#" className="text-gray-500 text-sm">View Profile</a>
            </div>
            <div className="flex flex-col items-start gap-5 px-14">
                <NavLink className="flex flex-row items-center gap-3" to={'/'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-house-door"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Beranda</span>
                    </>
                )} />
                <NavLink className="flex flex-row items-center gap-3" to={'/profile'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-person"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Profil</span>
                    </>
                )} />
                <NavLink className="flex flex-row items-center gap-3" to={'/chats'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-chat-left-dots"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Pesan</span>
                    </>
                )} />
                <NavLink className="flex flex-row items-center gap-3" to={'/projects'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-columns"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Project</span>
                    </>
                )} />
                <NavLink className="flex flex-row items-center gap-3" to={'/notifications'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-bell"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Notifikasi</span>
                    </>
                )} />
                <NavLink className="flex flex-row items-center gap-3" to={'/settings'} children={({ isActive }) => (
                    <>
                        <div className={`${isActive ? 'bg-relazee-blue' : 'bg-gray-400'} text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center`}><i className="bi bi-gear"></i></div>
                        <span className={`${isActive ? 'text-relazee-blue' : 'text-gray-400'}`}>Pengaturan</span>
                    </>
                )} />
            </div>
        </div>
    )
}

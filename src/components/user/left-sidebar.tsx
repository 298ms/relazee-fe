export default function UserLeftSidebar(props:any) {
    const dummyPhoto = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return (
        <div className={`bg-white rounded-lg py-8 flex flex-col items-stretch gap-10 w-1/5 ${props.className}`}>
            <div className="flex flex-col items-center">
                <div className={`bg-center bg-cover rounded-full w-12 aspect-square bg-[url('${dummyPhoto}')]`}></div>
                <span className="text-lg font-medium">Le Minerale</span>
                <a href="#" className="text-gray-500 text-sm">View Profile</a>
            </div>
            <div className="flex flex-col items-start gap-5 px-14">
                <a href="#" className="flex flex-row items-center gap-3">
                    <div className="bg-relazee-blue text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center"><i className="bi bi-house-door"></i></div>
                    <span className="text-relazee-blue">Beranda</span>
                </a>
                <a href="#" className="flex flex-row items-center gap-3">
                    <div className="bg-relazee-blue text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center"><i className="bi bi-person"></i></div>
                    <span className="text-relazee-blue">Profil</span>
                </a>
                <a href="#" className="flex flex-row items-center gap-3">
                    <div className="bg-relazee-blue text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center"><i className="bi bi-chat-left-dots"></i></div>
                    <span className="text-relazee-blue">Pesan</span>
                </a>
                <a href="#" className="flex flex-row items-center gap-3">
                    <div className="bg-relazee-blue text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center"><i className="bi bi-bell"></i></div>
                    <span className="text-relazee-blue">Notifikasi</span>
                </a>
                <a href="#" className="flex flex-row items-center gap-3">
                    <div className="bg-relazee-blue text-white text-sm rounded-full w-7 aspect-square flex items-center justify-center"><i className="bi bi-gear"></i></div>
                    <span className="text-relazee-blue">Pengaturan</span>
                </a>
            </div>
        </div>
    )
}

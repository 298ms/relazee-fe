export default function MahasiswaRightSidebar(props: any) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'
    const filledProjects = [
        {
            name: 'Salah Jurusan',
            count: 99
        },
        {
            name: 'Salah Jurusan',
            count: 99
        },
        {
            name: 'Salah Jurusan',
            count: 99
        },
        {
            name: 'Salah Jurusan',
            count: 99
        }
    ]
    const filledBookmarks = [
        {
            name: "Syah Reza Pahlevi",
            isOnline: true
        },
        {
            name: "Syah Reza Pahlevi",
            isOnline: false
        },
        {
            name: "Syah Reza Pahlevi",
            isOnline: true
        }
    ]
    const emptyProjects: any[] = []
    const emptyBookmarks: any[] = []
    const projects = emptyProjects
    const bookmarks = emptyBookmarks

    return (
        <div className={`bg-white rounded-lg py-8 flex flex-col w-1/5 px-6 ml-auto gap-7 ${props.className}`}>
            <div className='flex flex-col items-stretch gap-5'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-lg font-medium'>Project</span>
                    <a href="#"><i className="bi bi-window-plus text-relazee-blue text-2xl"></i></a>
                </div>
                <div className='space-y-4'>
                    {projects.length > 0 ? projects.map((project) => (
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className="bg-center bg-cover rounded-full w-6 aspect-square" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                <span className='text-sm text-gray-500'>{project.name}</span>
                            </div>
                            <span className='text-relazee-blue'>{project.count}</span>
                        </div>
                    )) :
                        <div className="flex flex-col gap-2 text-center items-center text-sm h-[150px] justify-center">
                            <p className="text-gray-500">Anda belum tergabung dalam Project</p>
                            <button className="text-relazee-blue border rounded-md border-relazee-blue px-4 py-1">Buat Project</button>
                        </div>
                    }
                </div>
                {
                    projects.length > 0 ?
                        <span className='text-relazee-blue text-center text-sm'>Tampilkan lebih banyak<i className="bi bi-chevron-down ml-2"></i></span> : <></>
                }
            </div>
            <div className='flex flex-col items-stretch gap-5'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-lg font-medium'>Bookmark</span>
                </div>
                <div className='space-y-4'>
                    {bookmarks.length > 0 ? bookmarks.map((bookmark) => (
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className="bg-center bg-cover rounded-full w-6 aspect-square" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                <span className='text-sm text-gray-500'>{bookmark.name}</span>
                            </div>
                            <div className={`rounded-full w-2 aspect-square ${bookmark.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        </div>
                    )) :
                        <div className="flex flex-col gap-2 text-center items-center text-sm h-[150px] justify-center">
                            <p className="text-gray-500">Tidak terdapat riwayat pencarian</p>
                            <button className="text-relazee-blue border rounded-md border-relazee-blue px-4 py-1">Eksplor</button>
                        </div>
                    }
                </div>
                {
                    bookmarks.length > 0 ?
                        <span className='text-relazee-blue text-center text-sm'>Tampilkan lebih banyak<i className="bi bi-chevron-down ml-2"></i></span> : <></>
                }
            </div>
        </div>
    )
}

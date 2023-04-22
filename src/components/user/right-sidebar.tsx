export default function UserRightSidebar(props: any) {
    const dummyPhoto = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    const dummyTeam = [
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
    const dummyHistory = [
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

    return (
        <div className={`bg-white rounded-lg py-8 flex flex-col w-1/5 px-6 ml-auto gap-7 ${props.className}`}>
            <div className='flex flex-col items-stretch gap-5'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-lg font-medium'>Tim</span>
                    <a href="#"><i className="bi bi-person-fill-add text-relazee-blue text-2xl"></i></a>
                </div>
                <div className='space-y-4'>
                    {dummyTeam && dummyTeam.map((team) => (
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className={`bg-center bg-cover rounded-full w-6 aspect-square bg-[url('${dummyPhoto}')]`}></div>
                                <span className='text-sm text-gray-500'>{team.name}</span>
                            </div>
                            <span className='text-relazee-blue'>{team.count}</span>
                        </div>
                    ))}
                </div>
                <span className='text-relazee-blue text-center text-sm'>Tampilkan lebih banyak<i className="bi bi-chevron-down ml-2"></i></span>
            </div>
            <div className='flex flex-col items-stretch gap-5'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-lg font-medium'>Riwayat</span>
                </div>
                <div className='space-y-4'>
                    {dummyHistory && dummyHistory.map((history) => (
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center gap-2'>
                                <div className={`bg-center bg-cover rounded-full w-6 aspect-square bg-[url('${dummyPhoto}')]`}></div>
                                <span className='text-sm text-gray-500'>{history.name}</span>
                            </div>
                            <div className={`rounded-full w-2 aspect-square ${history.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        </div>
                    ))}
                </div>
                <span className='text-relazee-blue text-center text-sm'>Tampilkan lebih banyak<i className="bi bi-chevron-down ml-2"></i></span>
            </div>
        </div>
    )
}

import Logo from '../../assets/logo.png'

export default function UserHome() {
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
    <div className='bg-relazee-gray w-full h-screen'>
      <div className="bg-white py-2">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <img src={Logo} alt="" />
          <input type="text" placeholder="Pencarian" className='rounded-md bg-relazee-gray px-3 py-1' />
          <div className='flex flex-row gap-5 items-center'>
            <a href="#"><i className="bi bi-bell"></i></a>
            <a href="#"><i className="bi bi-chat-left-dots"></i></a>
            <div className='flex flex-row items-center gap-1'>
              <div className={`bg-center bg-cover bg-[url('${dummyPhoto}')] w-7 aspect-square rounded-full`}></div>
              <i className="bi bi-caret-down-fill text-xs"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row p-4'>
        <div className="bg-white rounded-lg py-8 flex flex-col items-stretch gap-10 w-1/5">
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
        <div className='w-auto'></div>
        <div className='bg-white rounded-lg py-8 flex flex-col w-1/5 px-6 ml-auto gap-7'>
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
                  <div className={`rounded-full w-2 aspect-square ${history.isOnline? 'bg-green-500' : 'bg-gray-400'}`}></div>
                </div>
              ))}
            </div>
            <span className='text-relazee-blue text-center text-sm'>Tampilkan lebih banyak<i className="bi bi-chevron-down ml-2"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

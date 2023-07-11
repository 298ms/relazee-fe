import { useEffect, useRef, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function ProfileDropdown({ ...props }) {
    return (
        <div className='bg-white rounded-lg pt-6 flex flex-col gap-3 shadow-lg' {...props}>
            <div className='flex flex-row gap-3 items-center justify-between px-6'>
                <div className='bg-center bg-cover w-9 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className='flex flex-col'>
                    <h4 className='font-medium'>Le Minerale</h4>
                    <span className='text-gray-400 text-sm'>@azer_reza</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <a href="#" className='px-6 py-3 hover:bg-relazee-blue-light'>Profile Saya</a>
                <a href="#" className='px-6 py-3 hover:bg-relazee-blue-light'>Pengaturan Akun</a>
                <a href="#" className='px-6 py-3 hover:bg-relazee-blue-light'>Preferensi</a>
                <Link to={'/login'} className='px-6 py-3 hover:bg-red-500 hover:text-white rounded-b-lg'>Sign Out</Link>
            </div>
        </div>
    )
}

function SearchDropdown(props: any) {
    const dummySearch = [
        {
            name: 'Le Minerale',
            mahasiswaname: 'azer_reza'
        },
        {
            name: 'Le Minerale',
            mahasiswaname: 'azer_reza'
        },
        {
            name: 'Le Minerale',
            mahasiswaname: 'azer_reza'
        },
    ]

    return (
        <div className='bg-white p-6 flex flex-col gap-3 shadow-lg rounded-lg'>
            {dummySearch && dummySearch.map((search) => (
                <div className='flex flex-row gap-3 items-center'>
                    <div className='bg-center bg-cover w-9 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                    <div className='flex flex-col'>
                        <h4 className='font-medium'>{search.name}</h4>
                        <span className='text-gray-400 text-sm'>@{search.mahasiswaname}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function MahasiswaTopbar(props: any) {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showSearchDropdown, setShowSearchDropdown] = useState(false)

    const profileDropdownRef = useRef<HTMLDivElement>(null)
    const searchDropdownRef = useRef<HTMLDivElement>(null)

    const closeDropdown = (e: Event) => {
        if (profileDropdownRef.current && showProfileDropdown && !profileDropdownRef.current.contains(e.target as Node)) {
            setShowProfileDropdown(false)
        }
        if (searchDropdownRef.current && showSearchDropdown && !searchDropdownRef.current.contains(e.target as Node)) {
            setShowSearchDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown)
    })

    return (
        <div className={`bg-white py-2 relative z-10 ${props.className}`}>
            {showProfileDropdown && <div className='absolute right-5 top-14 z-10' ref={profileDropdownRef}>
                <ProfileDropdown />
            </div>}
            {showSearchDropdown && <div className='bg-black/50 absolute top-[100%] left-0 h-screen w-full'></div>}
            <div className="container mx-auto flex flex-row justify-between items-center">
                <Link to="/home"><img src={Logo} alt="" /></Link>
                <div className='w-72 relative'>
                    <input type="text" placeholder="Pencarian" className='rounded-md bg-relazee-gray px-3 py-1 w-full' onFocus={() => setShowSearchDropdown(true)} />
                    {showSearchDropdown && <div className='absolute top-10 right-0 left-0' ref={searchDropdownRef}>
                        <SearchDropdown />
                    </div>}
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <a href="#"><i className="bi bi-bell"></i></a>
                    <a href="#"><i className="bi bi-chat-left-dots"></i></a>
                    <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className='flex flex-row items-center gap-1'>
                        <div className="bg-center bg-cover w-7 aspect-square rounded-full" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                        <i className="bi bi-caret-down-fill text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

import { useEffect, useRef, useState } from 'react'
import Logo from '../../assets/logo.png'

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function ProfileDropdown({ ...props }) {
    return (
        <div className='bg-white rounded-lg p-6 flex flex-col gap-3 shadow-lg' {...props}>
            <div className='flex flex-row gap-3 items-center justify-between'>
                <div className='bg-center bg-cover w-9 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className='flex flex-col'>
                    <h4 className='font-medium'>Le Minerale</h4>
                    <span className='text-gray-400 text-sm'>@azer_reza</span>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <a href="#">Profile Saya</a>
                <a href="#">Pengaturan Akun</a>
                <a href="#">Preferensi</a>
                <a href="#">Sign Out</a>
            </div>
        </div>
    )
}

function SearchDropdown(props: any) {
    return (
        <div></div>
    )
}

export default function UserTopbar(props: any) {
    const [showDropdown, setShowDropdown] = useState(false)
    const profileDropdownRef = useRef<HTMLDivElement>(null)

    const closeDropdown = (e: Event) => {
        if (profileDropdownRef.current && showDropdown && !profileDropdownRef.current.contains(e.target as Node)) {
            setShowDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown)
    })

    return (
        <div className={`bg-white py-2 relative ${props.className}`}>
            {showDropdown && <div className='absolute right-5 top-14' ref={profileDropdownRef}>
                <ProfileDropdown />
            </div>}
            <div className="container mx-auto flex flex-row justify-between items-center">
                <img src={Logo} alt="" />
                <input type="text" placeholder="Pencarian" className='rounded-md bg-relazee-gray px-3 py-1 w-72' />
                <div className='flex flex-row gap-5 items-center'>
                    <a href="#"><i className="bi bi-bell"></i></a>
                    <a href="#"><i className="bi bi-chat-left-dots"></i></a>
                    <button onClick={() => setShowDropdown(!showDropdown)} className='flex flex-row items-center gap-1'>
                        <div className="bg-center bg-cover w-7 aspect-square rounded-full" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                        <i className="bi bi-caret-down-fill text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

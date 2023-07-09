import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import TagsInput from '../../components/shared/tags-input'

export default function MahasiswaOnboarding() {
    return (
        <div className='h-screen overflow-y-hidden'>
            <div className="bg-white py-2 shadow">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='flex flex-col h-full container mx-auto mt-5'>
                <div className='flex justify-end'>
                    <Link to={'/'} className='inline-block rounded-lg border border-gray-300 px-4 py-1'>Lewati</Link>
                </div>
                <div className='flex flex-col items-center w-full'>
                    <div className='flex flex-col max-w-[500px]'>
                        <h1 className='font-bold text-3xl text-center'>Portofolio</h1>
                        <p className='text-center'>Dapatkan manfaat yang luar biasa dari komunitas. Daftarlah sekarang dan rasakan manfaatnya!</p>
                        <TagsInput />
                    </div>
                </div>
            </div>
        </div>
    )
}

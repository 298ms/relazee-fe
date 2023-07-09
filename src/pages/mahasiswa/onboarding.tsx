import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import TagsInput from '../../components/shared/tags-input'

export default function MahasiswaOnboarding() {
    const [CV, setCV] = useState('')
    const [portofolio, setPortofolio] = useState('')

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
                    <div className='flex flex-col max-w-[500px] gap-3'>
                        <h1 className='font-bold text-3xl text-center'>Portofolio</h1>
                        <p className='text-center'>Dapatkan manfaat yang luar biasa dari komunitas. Daftarlah sekarang dan rasakan manfaatnya!</p>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Skills</label>
                            <TagsInput />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Pencapaian</label>
                            <TagsInput />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Link CV</label>
                            <input
                                value={CV}
                                onChange={(e) => setCV(e.target.value)}
                                type="text"
                                id='cv'
                                placeholder="https://"
                                className='rounded-md bg-transparent border px-4 py-2 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Link Portofolio</label>
                            <input
                                value={portofolio}
                                onChange={(e) => setPortofolio(e.target.value)}
                                type="text"
                                id='portofolio'
                                placeholder="https://"
                                className='rounded-md bg-transparent border px-4 py-2 w-full'
                            />
                        </div>
                        <button className='bg-relazee-blue rounded-lg py-2 text-white'>Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

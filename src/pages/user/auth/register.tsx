import { useState } from 'react'
import Logo from '../../../assets/logo.png'

export default function UserRegister() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [fakultas, setFakultas] = useState('')

    const fullnameHandleChange = (val: string) => {
        setFullname(val)
    }
    const angkatanHandleChange = (val: string) => {
        setAngkatan(val)
    }
    const fakultasHandleChange = (val: string) => {
        setFakultas(val)
    }

    return (
        <div className='h-screen overflow-y-hidden'>
            <div className="bg-white py-2 shadow">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='flex flex-row h-full'>
                <div className='bg-relazee-gray w-1/2'></div>
                <div className='w-3/5 flex flex-col items-center'>
                    <div className='container mx-auto flex flex-col items-stretch justify-center gap-3 w-1/2 mt-24'>
                        <h1 className='font-bold text-3xl'>Sign Up</h1>
                        <p>Dapatkan manfaat yang luar biasa dari komunitas. Daftarlah sekarang dan rasakan manfaatnya!</p>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                id='username'
                                placeholder="Buat username unik"
                                className='rounded-md bg-transparent border px-4 py-2 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Email</label>
                            <div className="relative w-full">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    className="bg-transparent border rounded-lg block w-full px-4 p-2.5"
                                    placeholder="Gunakan email kampus yang valid"
                                />
                            </div>
                        </div>
                        <button className='bg-relazee-blue rounded-lg py-2 text-white'>Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

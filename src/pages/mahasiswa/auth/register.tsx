import { useState } from 'react'
import Logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function MahasiswaRegister() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [fakultas, setFakultas] = useState<Number>(0)
    const [form, setForm] = useState(1)

    const usernameHandleChange = (val: string) => {
        setUsername(val)
    }
    const emailHandleChange = (val: string) => {
        setEmail(val)
    }
    const fullnameHandleChange = (val: string) => {
        setFullname(val)
    }
    const angkatanHandleChange = (val: string) => {
        setAngkatan(val)
    }
    const fakultasHandleChange = (val: Number) => {
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
                        {form == 1 ? <Account username={username} usernameHandleChange={usernameHandleChange} email={email} emailHandleChange={emailHandleChange} setForm={setForm} />
                            : <Biodata fullname={fullname} fullnameHandleChange={fullnameHandleChange} angkatan={angkatan} angkatanHandleChange={angkatanHandleChange} fakultas={fakultas} fakultasHandleChange={fakultasHandleChange} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Account({ username, usernameHandleChange, email, emailHandleChange, setForm }: any) {
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Username</label>
                <input
                    value={username}
                    onChange={(e) => usernameHandleChange}
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
                        onChange={(e) => emailHandleChange}
                        type="email"
                        id="email"
                        className="bg-transparent border rounded-lg block w-full px-4 p-2.5"
                        placeholder="Gunakan email kampus yang valid"
                    />
                </div>
            </div>
            <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => setForm(2)}>Selanjutnya</button>
        </>
    )
}

function Biodata({ fullname, fullnameHandleChange, angkatan, angkatanHandleChange, fakultas, fakultasHandleChange }: any) {
    const navigate  = useNavigate()
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Nama Lengkap</label>
                <input
                    value={fullname}
                    onChange={(e) => fullnameHandleChange}
                    type="text"
                    id='fullname'
                    placeholder="Masukkan nama lengkap"
                    className='rounded-md bg-transparent border px-4 py-2 w-full'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Angkatan</label>
                <div className="relative w-full">
                    <input
                        value={angkatan}
                        onChange={(e) => angkatanHandleChange}
                        type="number"
                        id="angkatan"
                        className="bg-transparent border rounded-lg block w-full px-4 p-2.5"
                        placeholder="Masukkan tahun angkatan"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Fakultas</label>
                <div className="relative w-full">
                    <select id="style" defaultValue={fakultas} onChange={(e) => fakultasHandleChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                        <option value={0}>Pilih fakultas</option>
                        <option value={1}>Fasilkom</option>
                        <option value={2}>Faperta</option>
                        <option value={3}>Fakkes</option>
                    </select>
                </div>
            </div>
            <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => { navigate('/onboarding') }}>Selanjutnya</button>
        </>
    )
}
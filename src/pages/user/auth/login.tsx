import Logo from '../../../assets/logo.png'

export default function UserLogin() {
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
                        <h1 className='font-bold text-3xl'>Sign In</h1>
                        <p>Dapatkan manfaat yang luar biasa dari komunitas. Daftarlah sekarang dan rasakan manfaatnya!</p>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Email atau Username</label>
                            <input type="text" id='email' placeholder="Masukkan email atau username" className='rounded-md bg-transparent border px-4 py-2 w-full' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Password</label>
                            <div className="relative w-full">
                                <input type="text" id="password" className="bg-transparent border rounded-lg block w-full px-4 p-2.5" placeholder="Masukkan password" />
                                <div className="flex absolute inset-y-0 right-0 items-center pr-5 pointer-events-none">
                                    <i className="bi bi-eye-fill text-gray-500"></i>
                                </div>
                            </div>
                        </div>
                        <a href="#" className='text-gray-500 self-end'>Lupa Password?</a>
                        <button className='bg-relazee-blue rounded-lg py-2 text-white'>Masuk</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

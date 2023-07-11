import SS from '../assets/ss.png'
import Pricing from '../assets/pricing.png'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Home() {
    return (
        <div>
            <nav className="bg-white shadow-lg py-7 px-20 hidden lg:block">
                <div className="container mx-auto flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2 items-center">
                        {/* <img src="https://nafishandoko.github.io/SkwnFrontendDev-a-Nafis-Arinda-Rizky-Putra-Handoko/assets/logo.png" alt="" />
                        <span className="text-custom-brown font-semibold text-2xl">Dekoor</span> */}
                        <img src={Logo} alt="" />
                    </div>
                    <ul className="flex flex-row items-center gap-20 font-medium">
                        <li><a href="#">Our Clients</a></li>
                        <li><a href="#">Features</a></li>
                        {/* <li><a href="#">Partnership</a></li> */}
                        <li><a href="#">Pricing</a></li>
                    </ul>
                    <div className="flex flex-row items-center gap-3">
                        <Link to={'/login'} className="bg-custom-green px-4 py-2 rounded-lg font-medium">Sign In</Link>
                        <a href="#" className="bg-custom-brown py-2 px-3 rounded-lg text-white"><i className="bi bi-bag"></i></a>
                    </div>
                </div>
            </nav>
            <header className="container mx-auto flex flex-row items-center h-[85vh]">
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <div className="flex flex-col items-center lg:items-start px-10 lg:px-28 gap-5">
                        <h1 className="font-bold text-5xl text-center lg:text-start">Learn how to make and publish sites with Figma</h1>
                        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                            <Link to={'/register'} className="bg-relazee-blue text-white rounded-lg px-4 py-2">
                                {/* <i className="bi bi-search"></i> */}
                                <span>Try it now!</span>
                            </Link>
                            {/* <a href="#"
                                className="border border-custom-brown font-regular text-custom-brown py-3 px-5 rounded-lg space-x-2">
                                <i className="bi bi-play-circle"></i>
                                <span>WATCH VIDEOS</span>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center'>
                    <img src={SS} alt="" className='rounded-lg shadow shadow-2xl' />
                </div>
            </header>
            <section id="data" className='container mx-auto flex flex-col items-center py-10 text-center px-20 gap-7'>
                <h2 className='font-bold text-3xl'>Our clients</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam distinctio obcaecati. Alias neque autem aliquam.</p>
                <div className='flex flex-row items-stretch justify-between gap-5'>
                    <div className='bg-white rounded-lg shadow shadow-2xl flex flex-col w-[200px] py-5'>
                        <span className='text-3xl text-relazee-blue font-bold'>652</span>
                        <span className='text-gray-500'>Mahasiswa</span>
                    </div>
                    <div className='bg-white rounded-lg shadow shadow-2xl flex flex-col w-[200px] py-5'>
                        <span className='text-3xl text-relazee-blue font-bold'>70</span>
                        <span className='text-gray-500'>Dosen</span>
                    </div>
                    <div className='bg-white rounded-lg shadow shadow-2xl flex flex-col w-[200px] py-5'>
                        <span className='text-3xl text-relazee-blue font-bold'>10</span>
                        <span className='text-gray-500'>Universitas</span>
                    </div>
                </div>
            </section>
            <section id="solution" className='container mx-auto flex flex-col items-center py-10 text-center px-20 gap-7'>
                <h2 className='font-bold text-3xl'>Solutions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam distinctio obcaecati. Alias neque autem aliquam.</p>
                <div className='flex flex-row items-stretch justify-between gap-5'>
                    <div className='bg-relazee-gray rounded-lg flex flex-col w-1/4 py-5 px-5 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Mentoring</h3>
                        <p>Relazee menyediakan fitur penemuan pembimbing yang memudahkan mahasiswa dalam mencari dan berkomunikasi dengan dosen pembimbing yang tepat.</p>
                    </div>
                    <div className='bg-relazee-gray rounded-lg flex flex-col w-1/4 py-5 px-5 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Connect</h3>
                        <p>Relazee menyediakan platform yang memudahkan mahasiswa dalam mencari rekan yang sesuai dengan minat, keahlian, dan tujuan mereka.</p>
                    </div>
                    <div className='bg-relazee-gray rounded-lg flex flex-col w-1/4 py-5 px-5 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Event Information</h3>
                        <p>Relazee menyediakan platform yang memudahkan mahasiswa dalam Menemukan dan mengikuti berbagai acara, kompetisi, dan perlombaan</p>
                    </div>
                    <div className='bg-relazee-gray rounded-lg flex flex-col w-1/4 py-5 px-5 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Project Management</h3>
                        <p>Relazee menyediakan fitur manajemen kegiatan yang memungkinkan mahasiswa mengelola proyek, jadwal, dan tugas dengan lebih efisien. </p>
                    </div>
                </div>
            </section>
            <section id="actor" className='container mx-auto px-20 flex flex-row gap-5 py-10'>
                <div className='w-1/3'>
                    <h2 className='font-bold text-3xl'>Aktor & Layanan</h2>
                </div>
                <div className='flex flex-row flex-wrap w-2/3'>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Mahasiswa</h3>
                        <p>Lorem ipsum dolor sit amet, aeque tation vis ei.</p>
                    </div>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Dosen</h3>
                        <p>Lorem ipsum dolor sit amet, aeque tation vis ei.</p>
                    </div>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <i className="bi bi-columns text-3xl"></i>
                        <h3 className='font-bold text-2xl'>Ormawa</h3>
                        <p>Lorem ipsum dolor sit amet, aeque tation vis ei.</p>
                    </div>
                </div>
            </section>
            <section id="pricing" className='container mx-auto flex flex-col items-center py-10 px-20 gap-5'>
                <h2 className='font-bold text-3xl'>Pricing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam distinctio obcaecati. Alias neque autem aliquam.</p>
                <div>
                    <img src={Pricing} alt="" width={1000} />
                </div>
            </section>
            <section id="cta" className='py-20 px-40 bg-relazee-blue-light'>
                <div className='container mx-auto flex flex-row items-center gap-5 '>
                    <div className='w-1/2'>
                        <h2 className='font-bold text-3xl'>Ready for the power? Start your free trial today</h2>
                    </div>
                    <div className='w-1/2 flex flex-col items-center'>
                        <Link to={'/register'} className='bg-relazee-blue text-white rounded-lg px-4 py-2'>Try it now!</Link>
                    </div>
                </div>
            </section>
            <footer className='bg-[#111133] text-white'>
                <div
                    className="container mx-auto flex flex-col lg:flex-row p-10 lg:p-20 text-center lg:text-start items-center gap-5">
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
                        <div className="flex flex-row items-center gap-3">
                            {/* <img src="https://nafishandoko.github.io/SkwnFrontendDev-a-Nafis-Arinda-Rizky-Putra-Handoko/assets/logo.png" alt="" width="30" />
                                <span className="font-bold">Dekoor</span> */}
                                <img src={Logo} alt="" />
                        </div>
                        <p className="">Dekoor is a furniture company created to fulfill the needs of family with
                            aesthetic feeling in their
                            furniture. Always pay attention to details and give clear communication for the customers. Priority
                            of our design is comfortability.</p>
                        <span className=" hidden lg:inline-block">©Copyright 2022 Relazee</span>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-row flex-wrap justify-center lg:justify-end gap-10">
                        <div className="flex flex-col gap-5 ">
                            <span className="font-medium text-lg">Support</span>
                            <a href="#">FAQ</a>
                            <a href="#">Shipping & Returns</a>
                            <a href="#">Care guide</a>
                            <a href="#">Redeem warranty</a>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <span className="font-medium text-lg">Social Media</span>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Tiktok</a>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <span className="font-medium text-lg">About Us</span>
                            <a href="#">Our story</a>
                            <a href="#">Designer</a>
                            <a href="#">Craftmanship</a>
                            <a href="#">Sustainability</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
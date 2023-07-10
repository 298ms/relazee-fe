import MahasiswaLayout from "../../components/mahasiswa/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import DummyPoster2 from '../../assets/dummy-poster2.png'
import PartnerCarousel from "../../components/mahasiswa/partner-carousel";
import PartnerCard from "../../components/mahasiswa/partner-card";
import { Link, NavLink } from "react-router-dom";
import KompetisiCard from "../../components/mahasiswa/kompetisi-card";

export default function MahasiswaHome() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'
    const dummyKompetisi = [
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster2
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster2
        },
        {
            name: 'National Paper Competition HMDEP USU 2022',
            img: DummyPoster
        },
    ]

    const dummyPartners = [
        {
            nama: 'Afiqur Rahman',
            fakultas: 'Fasilkom',
            skills: [
                'Backend Developer',
                'Devops Engineer'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
        {
            nama: 'Syah Reza Pahlevi',
            fakultas: 'Fasilkom',
            skills: [
                'Business Analyst',
                'UI/UX Design',
                'Product Design'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
        {
            nama: 'Syah Reza Pahlevi',
            fakultas: 'Fasilkom',
            skills: [
                'Business Analyst',
                'UI/UX Design',
                'Product Design'
            ],
            foto: 'https://source.unsplash.com/random/?person'
        },
    ]

    return (
        <MahasiswaLayout>
            <div className='flex flex-row items-stretch text-white gap-4'>
                <Link to={'/smartbot'} className='bg-relazee-blue rounded-lg w-1/2 flex flex flex-row items-center justify-between gap-5 p-6'>
                    <i className="bi bi-robot text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium'>Bot Cari Partner</h3>
                        <p className='text-sm'>Kesulitan menemukan partner yang sesuai? Temukan partnermu dengan bantuan BOT dalam hitungan detik!</p>
                    </div>
                    <i className="bi bi-chevron-right text-2xl"></i>
                </Link>
                <div className='bg-relazee-blue rounded-lg w-1/2 flex flex flex-row items-center justify-between gap-5 p-6'>
                    <i className="bi bi-file-earmark-plus-fill text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium'>Upload Kompetisi</h3>
                        <p className='text-sm'>Buat eventmu lebih terlihat dan dikenal semua orang. Mulai sekarang, sebarkan eventmu dengan cepat dan mudah!</p>
                    </div>
                    <i className="bi bi-chevron-right text-2xl"></i>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Temukan Partner</h2>
                    <Link to='/more/partner' className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></Link>
                </div>
                <div className="bg-white rounded-lg py-3 px-4 flex flex-row items-center justify-between">
                    <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="text-relazee-blue font-medium">FAQ</a>
                </div>
                <PartnerCarousel>
                    {(dummyPartners && dummyPartners.length > 0) && dummyPartners.map((partner, i) => (
                        <PartnerCard data={partner} />
                    ))}
                </PartnerCarousel>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Kompetisi</h2>
                    <Link to='/more/kompetisi' className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></Link>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {dummyKompetisi && dummyKompetisi.map((kompetisi, index) => (
                        <KompetisiCard kompetisi={kompetisi} key={index} index={index} />
                    ))}
                </div>
            </div>
        </MahasiswaLayout>
    )
}

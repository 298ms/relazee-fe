import UserLayout from "../../components/user/layout";
import DummyPoster from '../../assets/dummy-poster.png'
import PartnerCarousel from "../../components/user/partner-carousel";
import PartnerCard from "../../components/user/partner-card";

export default function UserHome() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <UserLayout>
            <div className='flex flex-row items-stretch text-white gap-4'>
                <div className='bg-relazee-blue rounded-lg w-1/2 flex flex flex-row items-center justify-between gap-5 p-6'>
                    <i className="bi bi-robot text-3xl"></i>
                    <div>
                        <h3 className='text-xl font-medium'>Bot Cari Partner</h3>
                        <p className='text-sm'>Kesulitan menemukan partner yang sesuai? Temukan partnermu dengan bantuan BOT dalam hitungan detik!</p>
                    </div>
                    <i className="bi bi-chevron-right text-2xl"></i>
                </div>
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
                    <a href="#" className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></a>
                </div>
                <div className="bg-white rounded-lg py-3 px-4 flex flex-row items-center justify-between">
                    <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="text-relazee-blue font-medium">FAQ</a>
                </div>
                {/* <div>This one is for multi-carousel</div> */}
                <PartnerCarousel>
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                </PartnerCarousel>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Kompetisi</h2>
                    <a href="#" className="text-relazee-blue">Temukan lebih <i className="bi bi-chevron-right"></i></a>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-white p-4 flex flex-col items-center gap-3 max-w-1/3">
                        <img src={DummyPoster} alt="" />
                        <h4 className="font-medium text-sm text-gray-500 text-center">National Paper Competition HMDEP USU 2022</h4>
                    </div>
                    <div className="rounded-lg bg-white p-4 flex flex-col items-center gap-3 max-w-1/3">
                        <img src={DummyPoster} alt="" />
                        <h4 className="font-medium text-sm text-gray-500 text-center">National Paper Competition HMDEP USU 2022</h4>
                    </div>
                    <div className="rounded-lg bg-white p-4 flex flex-col items-center gap-3 max-w-1/3">
                        <img src={DummyPoster} alt="" />
                        <h4 className="font-medium text-sm text-gray-500 text-center">National Paper Competition HMDEP USU 2022</h4>
                    </div>
                    <div className="rounded-lg bg-white p-4 flex flex-col items-center gap-3 max-w-1/3">
                        <img src={DummyPoster} alt="" />
                        <h4 className="font-medium text-sm text-gray-500 text-center">National Paper Competition HMDEP USU 2022</h4>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}

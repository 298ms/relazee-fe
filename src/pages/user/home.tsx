import UserLayout from "../../components/user/layout";

export default function UserHome() {
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
    </UserLayout>
  )
}

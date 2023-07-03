import MahasiswaLeftSidebar from './left-sidebar'
import MahasiswaRightSidebar from './right-sidebar'
import MahasiswaTopbar from './topbar'

export default function MahasiswaLayout({ children }: { children: any }) {
    return (
        <div className='bg-relazee-gray w-full max-h-screen overflow-y-hidden'>
            <MahasiswaTopbar />
            <div className='flex flex-row p-4 gap-4 h-full'>
                <MahasiswaLeftSidebar />
                <div className='w-3/5 flex flex-col gap-5 max-h-[90vh] overflow-y-scroll overflow-x-hidden px-2'>
                    {children}
                </div>
                <MahasiswaRightSidebar />
            </div>
        </div>
    )
}

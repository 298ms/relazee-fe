import UserLeftSidebar from './left-sidebar'
import UserRightSidebar from './right-sidebar'
import UserTopbar from './topbar'

export default function UserLayout({ children }: { children: any }) {
  return (
    <div className='bg-relazee-gray w-full min-h-screen'>
      <UserTopbar />
      <div className='flex flex-row p-4 gap-4'>
        <UserLeftSidebar />
        <div className='w-3/5 flex flex-col gap-5'>
          {children}
        </div>
        <UserRightSidebar />
      </div>
    </div>
  )
}

import Logo from '../../assets/logo.png'

export default function UserTopbar() {
    const dummyPhoto = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

    return (
        <div className="bg-white py-2">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <img src={Logo} alt="" />
                <input type="text" placeholder="Pencarian" className='rounded-md bg-relazee-gray px-3 py-1' />
                <div className='flex flex-row gap-5 items-center'>
                    <a href="#"><i className="bi bi-bell"></i></a>
                    <a href="#"><i className="bi bi-chat-left-dots"></i></a>
                    <div className='flex flex-row items-center gap-1'>
                        <div className={`bg-center bg-cover bg-[url('${dummyPhoto}')] w-7 aspect-square rounded-full`}></div>
                        <i className="bi bi-caret-down-fill text-xs"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

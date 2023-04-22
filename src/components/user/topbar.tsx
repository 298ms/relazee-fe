import Logo from '../../assets/logo.png'

export default function UserTopbar(props:any) {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <div className={`bg-white py-2 ${props.className}`}>
            <div className="container mx-auto flex flex-row justify-between items-center">
                <img src={Logo} alt="" />
                <input type="text" placeholder="Pencarian" className='rounded-md bg-relazee-gray px-3 py-1 w-72' />
                <div className='flex flex-row gap-5 items-center'>
                    <a href="#"><i className="bi bi-bell"></i></a>
                    <a href="#"><i className="bi bi-chat-left-dots"></i></a>
                    <div className='flex flex-row items-center gap-1'>
                        <div className="bg-center bg-cover w-7 aspect-square rounded-full" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                        <i className="bi bi-caret-down-fill text-xs"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

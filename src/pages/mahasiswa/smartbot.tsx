import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import TagsInput from '../../components/shared/tags-input'
import defaultProfile from '../../assets/default-profile.png'
import MahasiswaLayout from '../../components/mahasiswa/layout'


function User1(props: { content: string }) {
    return (
        <div className='w-full py-2'>
            <div className='bg-relazee-blue text-white p-4 rounded-3xl rounded-tr-none max-w-[400px] ml-auto'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

function User2(props: { content: string }) {
    return (
        <div className='w-full py-2'>
            <div className='bg-relazee-gray text-gray-500 p-4 rounded-3xl rounded-tl-none max-w-[400px]'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default function MahasiswaSmartbot() {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    enum ChatRole {
        USER1 = 'user1',
        USER2 = 'user2'
    }

    interface Chats {
        role: string,
        content: string
    }

    const dummyChats: Chats[] = [
        {
            role: ChatRole.USER2,
            content: 'Selamat datang di bot  Relazee! Semoga bot ini dapat membantu kamu untuk menemukan partner.'
        },
        {
            role: ChatRole.USER2,
            content: 'Anda akan segera dihubungkan dalam 10 detik'
        },
        {
            role: ChatRole.USER1,
            content: 'Halo...'
        },
    ]

    const [chats, setChats] = useState<Chats[]>(dummyChats)
    const chatsContainer = useRef<HTMLDivElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setChats([...chats, {
            role: ChatRole.USER1,
            content: input
        }])
        setInput('')
    }

    useEffect(() => {
        // const chatsContainer = useRef<HTMLDivElement>(null)
        // chatsContainer.current!.scrollTop = chatsContainer.current!.scrollHeight
        const chatsContainer = document.getElementById('chats_container')
        if (chatsContainer != null) {
            chatsContainer.scrollTop = chatsContainer.scrollHeight
        }

    }, [chats])

    const [displayForm, setDisplayForm] = useState(true)

    return (
        <div>
            {displayForm == true ? <SearchForm setDisplayForm={setDisplayForm} /> : <></>}
            <MahasiswaLayout>
                <div className="bg-white rounded-lg p-6 flex flex-col gap-5">
                    <div className="flex flex-row items-center justify-between relative">
                        <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                        <div className='mx-auto flex flex-row items-center gap-2'>
                            <i className="bi bi-robot text-2xl text-gray-500"></i>
                            <h2 className="text-gray-500 font-medium text-lg">Bot</h2>
                        </div>
                        {/* <button onClick={() => setShowDetailMenu(!showDetailMenu)}><i className="bi bi-three-dots-vertical"></i></button> */}
                        {/* {showDetailMenu && <div className="absolute top-[100%] right-0" ref={detailMenuRef}><DetailMenu /></div>} */}
                    </div>
                    <div className="flex flex-col h-[400px]">
                        <div className='h-screen overflow-y-scroll md:pb-20 pb-40 px-3' ref={chatsContainer} id='chats_container'>
                            {chats && chats.map((chat, index) => (
                                <div key={index}>
                                    {chat.role == ChatRole.USER1 ? <User1 content={chat.content} /> : <User2 content={chat.content} />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-stretch gap-2">
                        <div className='sticky left-0 bottom-20 md:bottom-5 w-full flex flex-col items-center'>
                            <form onSubmit={handleSubmit} className="relative md:w-full">
                                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i className="bi bi-question-circle-fill text-relazee-blue"></i></div> */}
                                <button type='button' onClick={() => { }} className="flex absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                    <i className="bi bi-emoji-smile text-relazee-blue"></i>
                                </button>
                                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" id="simple-search" className="shadow-lg bg-white text-relazee-blue border border-relazee-blue text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-12 p-2.5 placeholder-gray-500" placeholder="Type your message..." />
                                <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                    <i className="bi bi-send-fill text-relazee-blue"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </MahasiswaLayout>
        </div>
    )
}

const ToggleSwitch = ({ isRandom, handleRandom }: any) => {
    // https://tailwind-elements.com/docs/standard/forms/switch/

    return (
        <div className="flex items-center gap-2 mx-auto">
            <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer font-bold text-gray-500"
                htmlFor="flexSwitchChecked"
            >Random</label>
            <input
                type="checkbox"
                checked={isRandom}
                onChange={handleRandom}
                role="switch"
                id="flexSwitchChecked"
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            />
        </div>
    );
};

function SearchForm({ setDisplayForm }: any) {
    const [angkatan, setAngkatan] = useState<Number>(0)

    const angkatanHandleChange = (val: Number) => {
        setAngkatan(val)
    }

    const [isRandom, setIsRandom] = useState(false);

    const handleRandom = () => {
        setIsRandom(!isRandom);
    };

    return (
        <div className='h-screen overflow-y-hidden'>
            <div className="bg-white py-2 shadow">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='flex flex-col h-full container mx-auto mt-5'>
                <div className='flex justify-start'>
                    <Link to={'/'} className='inline-block rounded-lg border border-gray-300 px-4 py-1'>Kembali</Link>
                </div>
                <div className='flex flex-col items-center w-full'>
                    <div className='flex flex-col w-[400px] gap-3'>
                        <h1 className='font-bold text-3xl text-center'>Smart Bot</h1>
                        <p className='text-center'>Dapatkan manfaat yang luar biasa dari komunitas</p>
                        <ToggleSwitch isRandom={isRandom} handleRandom={handleRandom} />
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Fakultas</label>
                            <TagsInput disabled={isRandom ? true : false} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Angkatan</label>
                            <div className="relative w-full">
                                <select
                                    id="style"
                                    defaultValue={angkatan as number}
                                    onChange={(e) => angkatanHandleChange}
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    disabled={isRandom ? true : false}
                                >
                                    <option value={0}>Pilih angkatan</option>
                                    <option value={1}>2019</option>
                                    <option value={2}>2020</option>
                                    <option value={3}>2021</option>
                                    <option value={4}>2022</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="" className='text-gray-500 font-medium'>Skills</label>
                            <TagsInput disabled={isRandom ? true : false} />
                        </div>
                        <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => { setDisplayForm(false) }}>Mulai</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Portofolio({ setForm }: any) {
    const [CV, setCV] = useState('')
    const [portofolio, setPortofolio] = useState('')
    return (
        <div className='flex flex-col max-w-[500px] gap-3'>
            <h1 className='font-bold text-3xl text-center'>Portofolio</h1>
            <p className='text-center'>Dapatkan manfaat yang luar biasa dari komunitas. Daftarlah sekarang dan rasakan manfaatnya!</p>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Skills</label>
                <TagsInput />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Pencapaian</label>
                <TagsInput />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Link CV</label>
                <input
                    value={CV}
                    onChange={(e) => setCV(e.target.value)}
                    type="text"
                    id='cv'
                    placeholder="https://"
                    className='rounded-md bg-transparent border px-4 py-2 w-full'
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className='text-gray-500 font-medium'>Link Portofolio</label>
                <input
                    value={portofolio}
                    onChange={(e) => setPortofolio(e.target.value)}
                    type="text"
                    id='portofolio'
                    placeholder="https://"
                    className='rounded-md bg-transparent border px-4 py-2 w-full'
                />
            </div>
            <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => setForm(2)}>Selanjutnya</button>
        </div>
    )
}

function ProfilePhoto() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col max-w-[500px] gap-2'>
            <h1 className='font-bold text-3xl text-center'>Foto Profil</h1>
            <div className='w-[300px] aspect-square bg-center bg-cover' style={{ backgroundImage: `url(${defaultProfile})` }}></div>
            <input type="file" name="photo" id="photo" />
            <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => { navigate('/') }}>Selanjutnya</button>
        </div>
    )
}
import React, { FormEvent, useRef, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import TagsInput from '../../components/shared/tags-input'
import defaultProfile from '../../assets/default-profile.png'
import MahasiswaLayout from '../../components/mahasiswa/layout'


function User1(props: { content: string }) {
    return (
        <div className='w-full py-1'>
            <div className='bg-relazee-blue text-white p-4 rounded-3xl rounded-tr-none max-w-[400px] ml-auto'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

function User2(props: { content: string }) {
    return (
        <div className='w-full py-1'>
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
            role: ChatRole.USER1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        },
        {
            role: ChatRole.USER2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        },
        {
            role: ChatRole.USER1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        },
        {
            role: ChatRole.USER2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        },
        {
            role: ChatRole.USER1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        },
        {
            role: ChatRole.USER2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui distinctio adipisci iusto quidem saepe mollitia nulla fugiat exercitationem, totam dolores asperiores et aperiam quae consequatur sunt consectetur sed fuga sequi labore voluptatum earum perferendis?'
        }
    ]

    const [chats, setChats] = useState<Chats[]>(dummyChats)
    const chatsContainer = useRef<HTMLDivElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <div>
            <MahasiswaLayout>
                <div className="bg-white rounded-lg p-6 flex flex-col gap-5">
                    <div className="flex flex-row items-center justify-between relative">
                        <button onClick={() => navigate(-1)} className="bg-relazee-black w-7 flex items-center justify-center aspect-square text-white rounded-full"><i className="bi bi-arrow-left-short"></i></button>
                        <h2 className="text-gray-500 font-medium text-lg text-center mx-auto">Bot</h2>
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
                        {/* <a href="#" className="bg-relazee-blue rounded-lg p-3 text-white w-full text-center">Daftar Sekarang</a>
                        <a href="#" className="bg-relazee-blue-light rounded-lg text-gray-500 p-3 w-full text-center">Buat Tim</a> */}
                        <div className='sticky left-0 bottom-20 md:bottom-5 w-full flex flex-col items-center'>
                            <form onSubmit={handleSubmit} className="relative md:w-full">
                                {/* <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none"><i className="bi bi-question-circle-fill text-relazee-blue"></i></div> */}
                                <button type='button' onClick={() => setChats([])} className="flex md:hidden absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                    <i className="bi bi-trash-fill text-relazee-blue"></i>
                                </button>
                                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" id="simple-search" className="shadow-lg bg-white text-relazee-blue border border-relazee-blue text-sm rounded-lg focus:ring-relazee-blue focus:border-relazee-blue block w-full px-14 md:px-5 p-2.5 placeholder-gray-500" placeholder="Type your message..." />
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

function SearchForm() {
    const [CV, setCV] = useState('')
    const [portofolio, setPortofolio] = useState('')

    return (
        <div className='h-screen overflow-y-hidden'>
            <div className="bg-white py-2 shadow">
                <div className="container mx-auto flex flex-row justify-between items-center">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='flex flex-col h-full container mx-auto mt-5'>
                <div className='flex justify-end'>
                    <Link to={'/'} className='inline-block rounded-lg border border-gray-300 px-4 py-1'>Lewati</Link>
                </div>
                <div className='flex flex-col items-center w-full'>
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
                        <button className='bg-relazee-blue rounded-lg py-2 text-white' onClick={() => { }}>Selanjutnya</button>
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
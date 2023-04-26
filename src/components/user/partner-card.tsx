import { Link } from "react-router-dom"

export default function PartnerCard() {
    const dummyPhoto = 'https://source.unsplash.com/random/?person'

    return (
        <Link reloadDocument to='/partner/1' className="rounded-lg bg-white p-4 flex flex-col gap-3">
            <div className="flex flex-row items-start gap-3">
                <div className="bg-center bg-cover w-20 aspect-square rounded-md" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-medium">Afiqur Rahman</h4>
                        <span>Fasilkom 20</span>
                    </div>
                    <div className="flex flex-row items-stretch gap-1 flex-wrap">
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                        <span className="bg-relazee-gray text-gray-500 text-xs rounded-lg py-1 px-2">Frontend Developer</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-stretch gap-2">
                <button className="w-full rounded-lg border border-gray-500 px-4 py-2 bg-transparent flex flex-row items-center justify-center gap-3">
                    <i className="bi bi-microsoft-teams text-2xl"></i>
                    Team Invite
                </button>
                <button className="w-full rounded-lg border border-gray-500 px-4 py-2 bg-transparent flex flex-row items-center justify-center gap-3">
                    <i className="bi bi-chat-fill"></i>
                    Chat Request
                </button>
            </div>
        </Link>
    )
}

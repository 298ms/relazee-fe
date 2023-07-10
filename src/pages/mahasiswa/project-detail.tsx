import MahasiswaLayout from "../../components/mahasiswa/layout";

export default function MahasiswaProjectDetail() {
    return (
        <MahasiswaLayout showRightSidebar={false}>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Team Information</h2>
                </div>
                <div className="flex flex-row items-start gap-3">
                    <div className="bg-white rounded-lg w-3/5 p-4">
                        <table className="table">
                            <tr className="align-baseline">
                                <td className="table-cell border-r-[10px] border-transparent">Nama</td>
                                <td className="table-cell">: 298 ms</td>
                            </tr>
                            <tr className="align-baseline">
                                <td className="table-cell border-r-[10px] border-transparent">Project</td>
                                <td className="table-cell"> : Gemastik</td>
                            </tr>
                            <tr className="align-baseline">
                                <td className="table-cell border-r-[10px] border-transparent">Deskripsi</td>
                                <td className="table-cell"> : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet elit eu mauris faucibus, a pharetra justo tincidunt. Praesent bibendum nisl ut vehicula laoreet. Donec mauris quam, auctor a blandit id, tempor gravida arcu.</td>
                            </tr>
                        </table>
                    </div>
                    <div className="bg-white rounded-lg w-2/5 p-4">
                        <div className="flex flex-row mb-3 justify-between">
                            <h3 className="font-medium">Members</h3>
                            <div className="bg-blue-400 w-4 h-4 rounded-full"></div>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <div className="w-[40px] aspect-square bg-center bg-cover rounded-full" style={{ backgroundImage: `url(https://source.unsplash.com/random/?person)` }}></div>
                            <div className="w-[40px] aspect-square bg-center bg-cover rounded-full" style={{ backgroundImage: `url(https://source.unsplash.com/random/?person)` }}></div>
                            <div className="w-[40px] aspect-square bg-center bg-cover rounded-full" style={{ backgroundImage: `url(https://source.unsplash.com/random/?person)` }}></div>
                            <div className="w-[40px] aspect-square bg-center bg-cover rounded-full" style={{ backgroundImage: `url(https://source.unsplash.com/random/?person)` }}></div>
                            <div className="w-[40px] aspect-square bg-center bg-cover rounded-full" style={{ backgroundImage: `url(https://source.unsplash.com/random/?person)` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </MahasiswaLayout>
    )
}

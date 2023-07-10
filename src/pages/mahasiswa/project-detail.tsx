import MahasiswaLayout from "../../components/mahasiswa/layout";

export default function MahasiswaProjectDetail() {
    const tasks = [
        {
            team: '298 ms',
            event: 'Gemastik',
            description: 'Revisi BAB 3 bagian metode',
            time: '7 hari yang lalu',
            status: true,
            color: 'green'
        },
        {
            team: 'Salah Jurusan',
            event: 'PIMNAS',
            description: 'Revisi BAB 3 bagian metode',
            time: '7 hari yang lalu',
            status: true,
            color: 'blue'
        },
        {
            team: 'Sebelumnya',
            event: 'Gemastik',
            description: 'Revisi BAB 3 bagian metode',
            time: '7 hari yang lalu',
            status: false,
            color: 'red'
        },
    ]

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
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Tasks</h2>
                </div>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th className="py-3">Team</th>
                            <th>Event</th>
                            <th>Document</th>
                            <th>Description</th>
                            <th>Time</th>
                            <th>Feedback</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(tasks && tasks.length > 0) && tasks.map((task, i) => (
                            <tr className={`bg-white rounded-lg border-l-4 border-${task.color}-400`}>
                                <td className="py-4">{task.team}</td>
                                <td>{task.event}</td>
                                <td>
                                    <a href="#"><i className="bi bi-file-earmark-text text-relazee-blue text-lg"></i></a>
                                </td>
                                <td>{task.description}</td>
                                <td>{task.time}</td>
                                <td>
                                    <button className="text-relazee-blue border rounded-md border-relazee-blue px-4 py-1">Lihat</button>
                                </td>
                                <td>
                                    <i className={`bi bi-check-square-fill ${task.status ? 'text-green-500' : 'text-gray-300'}`}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MahasiswaLayout>
    )
}

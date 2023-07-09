import MahasiswaLayout from "../../components/mahasiswa/layout";

export default function MahasiswaProject() {
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
            team: '298 ms',
            event: 'Gemastik',
            description: 'Revisi BAB 3 bagian metode',
            time: '7 hari yang lalu',
            status: true,
            color: 'green'
        },
        {
            team: '298 ms',
            event: 'Gemastik',
            description: 'Revisi BAB 3 bagian metode',
            time: '7 hari yang lalu',
            status: true,
            color: 'green'
        },
    ]

    return (
        <MahasiswaLayout showRightSidebar={false}>
            <div className="flex flex-row items-center justify-between bg-white py-3 px-5 rounded-lg text-relazee-blue">
                <p>Kamu mempunyai 21 Task yang memerlukan tindakan!</p>
                <i className="bi bi-arrow-right-short text-2xl"></i>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Incoming Tasks</h2>
                    <a className="text-relazee-blue">Lihat semua <i className="bi bi-chevron-right"></i></a>
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
                        <tr className="bg-white rounded-lg border-l-4 border-green-400">
                            <td className="py-4">298 ms</td>
                            <td>Gemastik</td>
                            <td>
                                <a href="#"><i className="bi bi-file-earmark-text text-relazee-blue text-lg"></i></a>
                            </td>
                            <td>Revisi BAB 3 bagian metode</td>
                            <td>7 hari yang lalu</td>
                            <td>
                                <button className="text-relazee-blue border rounded-md border-relazee-blue px-4 py-1">Lihat</button>
                            </td>
                            <td>
                                <i className="bi bi-check-square-fill text-green-500"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </MahasiswaLayout>
    )
}

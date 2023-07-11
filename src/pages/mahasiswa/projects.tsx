import { Link } from "react-router-dom";
import MahasiswaLayout from "../../components/mahasiswa/layout";

import { dummyTasks, dummyProjects } from "../../data";

export default function MahasiswaProject() {
    const tasks = dummyTasks

    const projects = dummyProjects

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
                        {(tasks && tasks.length > 0) && tasks.map((task, i) => (
                            <tr className={`bg-white rounded-lg border-l-8 ${task.color}`}>
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
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="font-medium text-xl">Projects</h2>
                    {/* <a className="text-relazee-blue">Lihat semua <i className="bi bi-chevron-right"></i></a> */}
                </div>
                <div className="flex flex-row flex-wrap items-stretch gap-3">
                    {(projects && projects.length > 0) && projects.map((project, i) => (
                        <Link to={'/projects/1'} className={`rounded-lg p-4 ${project.color} text-white flex flex-col gap-2 w-[180px]`}>
                            <h3 className="text-lg font-medium">{project.team}</h3>
                            <p className="text-sm">{project.lomba}</p>
                        </Link>
                    ))}
                    <div className="rounded-lg p-4 bg-white flex flex-col justify-center items-center w-[180px]">
                        <i className="bi bi-plus-square"></i>
                        <span>Tambah project</span>
                    </div>
                </div>
            </div>
        </MahasiswaLayout>
    )
}

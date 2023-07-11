// import dummy posters
import GemastikLogo from './assets/dummy poster/gemastik.png'
import KnmipaLogo from './assets/dummy poster/knmipa.png'
import PimnasLogo from './assets/dummy poster/pimnas.png'
import PeksiminasLogo from './assets/dummy poster/peksiminas.jpg'
import KJILogo from './assets/dummy poster/kji.png'

export const dummyKompetisi = [
    {
        name: 'Pagelaran Mahasiswa Nasional Bidang Teknologi Informasi dan Komunikasi 2023',
        img: GemastikLogo
    },
    {
        name: 'Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam',
        img: KnmipaLogo
    },
    {
        name: 'Pekan Ilmiah Mahasiswa Nasional',
        img: PimnasLogo
    },
    {
        name: 'Pekan Seni Mahasiswa Nasional XVI',
        img: PeksiminasLogo
    },
    {
        name: 'Kompetisi Jembatan Indonesia (KJI)',
        img: KJILogo
    },
]

const dummyPhoto = 'https://source.unsplash.com/random/?person'
export const dummyPartners = [
    {
        nama: 'Afiqur Rahman',
        fakultas: 'Fasilkom',
        skills: [
            'Backend Developer',
            'Devops Engineer'
        ],
        foto: dummyPhoto
    },
    {
        nama: 'Syah Reza Pahlevi',
        fakultas: 'Fasilkom',
        skills: [
            'Business Analyst',
            'UI/UX Design',
            'Product Design'
        ],
        foto: dummyPhoto
    },
    {
        nama: 'Syah Reza Pahlevi',
        fakultas: 'Fasilkom',
        skills: [
            'Business Analyst',
            'UI/UX Design',
            'Product Design'
        ],
        foto: dummyPhoto
    },
]

export const dummyTasks = [
    {
        team: '298 ms',
        event: 'Gemastik',
        description: 'Revisi BAB 3 bagian metode',
        time: '7 hari yang lalu',
        status: true,
        color: 'border-blue-400'
    },
    {
        team: 'Salah Jurusan',
        event: 'PIMNAS',
        description: 'Revisi BAB 3 bagian metode',
        time: '7 hari yang lalu',
        status: true,
        color: 'border-green-400'
    },
    {
        team: 'Sebelumnya',
        event: 'Gemastik',
        description: 'Revisi BAB 3 bagian metode',
        time: '7 hari yang lalu',
        status: false,
        color: 'border-red-400'
    },
]

export const dummyProjects = [
    {
        team: '298 ms',
        lomba: 'National Paper Competition HMDEP USU 2022',
        color: 'bg-blue-400'
    },
    {
        team: 'Salah Jurusan',
        lomba: 'National Paper Competition HMDEP USU 2022',
        color: 'bg-green-400'
    },
    {
        team: 'Trinfinity',
        lomba: 'National Paper Competition HMDEP USU 2022',
        color: 'bg-red-400'
    },
]
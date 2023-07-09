import { Route, Routes } from 'react-router-dom'
import MahasiswaHome from './pages/mahasiswa/home'
import MahasiswaKompetisiDetail, { MahasiswaKompetisiDetailDeskripsi, MahasiswaKompetisiDetailInfo } from './pages/mahasiswa/kompetisi-detail'
import MahasiswaPartner from './pages/mahasiswa/partner'
import MahasiswaKompetisi from './pages/mahasiswa/kompetisi'
import MahasiswaMore from './pages/mahasiswa/more'
import MahasiswaPartnerDetail from './pages/mahasiswa/partner-detail'
import MahasiswaLogin from './pages/mahasiswa/auth/login'
import MahasiswaRegister from './pages/mahasiswa/auth/register'
import MahasiswaOnboarding from './pages/mahasiswa/onboarding'
import MahasiswaSmartbot from './pages/mahasiswa/smartbot'
import MahasiswaProject from './pages/mahasiswa/projects'

function App() {
    return (
        <Routes>
            <Route path='/login' element={<MahasiswaLogin />} />
            <Route path='/register' element={<MahasiswaRegister />} />
            <Route path='/onboarding' element={<MahasiswaOnboarding />} />
            <Route path='/smartbot' element={<MahasiswaSmartbot />} />
            <Route path='/projects' element={<MahasiswaProject />} />
            <Route path="/" element={<MahasiswaHome />} />
            <Route path="/more" element={<MahasiswaMore />}>
                <Route path='partner' element={<MahasiswaPartner />} />
                <Route path='kompetisi' element={<MahasiswaKompetisi />} />
            </Route>
            <Route path="/kompetisi/:id" element={<MahasiswaKompetisiDetail />}>
                <Route path="info" element={<MahasiswaKompetisiDetailInfo />} />
                <Route path="deskripsi" element={<MahasiswaKompetisiDetailDeskripsi />} />
            </Route>
            <Route path='/partner/:id' element={<MahasiswaPartnerDetail />} />
        </Routes>
    )
}

export default App

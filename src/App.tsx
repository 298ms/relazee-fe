import { Route, Routes } from 'react-router-dom'
import UserHome from './pages/user/home'
import UserKompetisiDetail, { UserKompetisiDetailDeskripsi, UserKompetisiDetailInfo } from './pages/user/kompetisi-detail'

function App() {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/kompetisi/:id" element={<UserKompetisiDetail />}>
                <Route path="info" element={<UserKompetisiDetailInfo />} />
                <Route path="deskripsi" element={<UserKompetisiDetailDeskripsi />} />
            </Route>
        </Routes>
    )
}

export default App

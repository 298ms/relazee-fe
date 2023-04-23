import { Route, Routes } from 'react-router-dom'
import UserHome from './pages/user/home'
import UserKompetisiDetail from './pages/user/kompetisi-detail'

function App() {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/kompetisi/:id" element={<UserKompetisiDetail />} />
        </Routes>
    )
}

export default App

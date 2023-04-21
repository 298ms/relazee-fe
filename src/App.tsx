import { Route, Routes } from 'react-router-dom'
import UserHome from './pages/user/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
    </Routes>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PhonebookPage from './pages/PhonebookPage'
 
const App = () => {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='phonebook' element={<PhonebookPage />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
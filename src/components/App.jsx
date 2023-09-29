import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PhonebookPage from '../pages/PhonebookPage'

const App = () => {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />}/>
        <Route path='phonebook' element={<PhonebookPage />} />
        {/* <Route path='*' element={<Navigate to='/login' replace />} /> */}
      </Route>
    </Routes>
  </>
  )
}

export default App
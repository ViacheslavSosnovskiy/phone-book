import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { refreshUser } from '../../redux/auth/authOperations'

import Layout from '../Layout'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import PhonebookPage from '../../pages/PhonebookPage'
import { PrivateRoute } from '../PrivateRoute'
import { RestrictedRoute } from '../RestrictedRoute'
import { useAuth } from '../../hooks/useAuth'

const App = () => {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <div>refreshing user ...</div>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route 
          path='login'
          element={
            <RestrictedRoute redirectTo='/phonebook' component={<LoginPage />} />
          } 
        />
        <Route 
          path='register'
          element={
            <RestrictedRoute redirectTo='/phonebook' component={<RegisterPage />} />
          }
        />
        <Route 
          path='phonebook'
          element={
            <PrivateRoute redirectTo='/login' component={<PhonebookPage />} />
          } 
        />
      </Route>
    </Routes>
  )
}

export default App
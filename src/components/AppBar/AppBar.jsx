import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { userToken } from "../../redux/auth/authSelectors"
import AuthMenu from "../AuthMenu"
import UserMenu from "../UserMenu/UserMenu"

const AppBar = () => {
  const isUserLoggedIn = useSelector(userToken)

  return (
      <nav 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 8,
          borderBottom: '1px solid black',
          marginBottom: 12
        }}
      >
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/phonebook'>Phone book</NavLink>
        </div>
        
        {isUserLoggedIn ? <UserMenu /> : <AuthMenu />}
      </nav>
  )
}

export default AppBar
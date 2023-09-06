import { Link } from "react-router-dom"
import UserMenu from "../UserMenu"
import { useSelector } from "react-redux"

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 8,
      borderBottom: '1px solid black',
      marginBottom: 12
      }}
    >
      <nav>
        <Link to="/" style={{marginRight: 20}}>Home</Link>
        {!isLoggedIn && <Link to="/login" style={{marginRight: 20}}>Log in</Link>}
        {isLoggedIn && <Link to='/phonebook'>Phone book</Link>}
      </nav>
        {isLoggedIn && <UserMenu />}
    </header>
  )
}

export default AppBar
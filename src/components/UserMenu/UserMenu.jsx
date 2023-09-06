import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/user/userSlice"

const UserMenu = () => {
    const login = useSelector((state) => state.user.login)
    const dispatch = useDispatch()

  return (
    <div>
        {login}
        <button onClick={() => dispatch(logOut())} style={{marginLeft: 20}}>log out</button>
    </div>
    
  )
}

export default UserMenu
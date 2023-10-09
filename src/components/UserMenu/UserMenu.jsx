import { useDispatch } from "react-redux"
import { logOut } from "../../redux/auth/authOperations"
import defaultAvatar from '../../img/user.webp'
import { useAuth } from "../../hooks/useAuth"

const styles = {
    userContainer: {
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'space-between',
    },
    userAvatar: {
      width: '30px',
      marginRight: '20px',
    },
    userInfoWrapper: {
      marginRight: '20px',
    },
    userName: {
      marginRight: '20px',
      margin: '6px',
    },
    userEmail: {
      color: 'gray',
      fontSize: '14px',
      margin: '6px',
    },
  }

const UserMenu = () => {
    const dispatch = useDispatch()
    const {user} = useAuth()

    return (
        <div style={styles.userContainer}>
          <img src={defaultAvatar} alt='userAvatar' style={styles.userAvatar}/>
            <div style={styles.userInfoWrapper}>
              <b style={styles.userName}>{user.name}</b>
              <p style={styles.userEmail}>{user.email}</p>
            </div>
            <button type='button' onClick={() => dispatch(logOut())}>log out</button>
        </div>
      )
}

export default UserMenu
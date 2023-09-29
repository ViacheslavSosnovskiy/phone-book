import { useDispatch, useSelector } from "react-redux"
import { userEmail, userName } from "../../redux/auth/authSelectors"
import { logOut } from "../../redux/auth/authOperations"
import defaultAvatar from '../../img/user.webp'

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
    const name = useSelector(userName)
    const email = useSelector(userEmail)
    return (
        <div style={styles.userContainer}>
          <img src={defaultAvatar} alt='userAvatar' style={styles.userAvatar}/>
            <div style={styles.userInfoWrapper}>
              <b style={styles.userName}>{name}</b>
              <p style={styles.userEmail}>{email}</p>
            </div>
            {/* <Button variant="outlined" type='button' onClick={() => dispatch(logOut())}>log out</Button> */}
            <button type='button' onClick={() => dispatch(logOut())}>log out</button>
        </div>
      )
}

export default UserMenu
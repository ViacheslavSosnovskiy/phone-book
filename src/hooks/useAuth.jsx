import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing, userName, userEmail} from "../redux/auth/authSelectors";

export const useAuth = () => {
    const name = useSelector(userName)
    const email = useSelector(userEmail)
    const user = useSelector(selectUser)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)

    return {name, email, user, isLoggedIn, isRefreshing}
}
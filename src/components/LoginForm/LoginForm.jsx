import { useDispatch } from "react-redux";
import { logIn } from '../../redux/user/userSlice'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        dispatch(logIn(form.elements.login.value))
        form.reset()
        navigate('/phonebook', {replace: true})
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='login' />
                <br />
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}
export default LoginForm
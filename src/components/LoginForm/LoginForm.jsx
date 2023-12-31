import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/authOperations'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const handleInputChange = e => {
        const {value, name} = e.target;
        
        switch (name) {
            case 'email':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            default:
                return
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        dispatch(logIn({email, password}))
        resetForm()
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const isDicebledBtn = email && password ? true : false

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Email
                    <input type='text' name='email' value={email} onChange={handleInputChange}/>
                </label>
                <label>
                    Password
                    <input type='text' name='password' value={password} onChange={handleInputChange}/>
                </label>

                <button type='submit' disabled={!isDicebledBtn}>submit</button>
            </form>
        </div>
    )
}

export default LoginForm
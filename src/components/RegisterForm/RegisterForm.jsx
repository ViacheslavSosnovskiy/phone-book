import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn, register } from '../../redux/auth/authOperations'
import toast from 'react-hot-toast'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const handleInputChange = e => {
        const {value, name} = e.target;
        
        switch (name) {
            case 'name':
                return setName(value)
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
        dispatch(register({name, email, password}))
            .then(() => {
                dispatch(logIn({email, password}))
                toast.success(`The user ${name} was successflly registered!`)
            })
            .catch(() => toast.error("user registration error, try again!"))
        resetForm()
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const isDicebledBtn = name && email && password ? true : false

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name
                    <input type='text' name='name' value={name} onChange={handleInputChange}/>
                </label>
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

export default RegisterForm
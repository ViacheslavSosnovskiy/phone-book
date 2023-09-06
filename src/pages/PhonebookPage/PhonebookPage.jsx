import { useSelector } from "react-redux"
import { useLogOutRedirect } from "../../hooks/useLogOutRedirect"
import ContactList from "../../components/ContactList"
import ContactForm from "../../components/ContactForm"
import ContactFilter from "../../components/ContactFilter"

 const PhonebookPage = () => {
    const login = useSelector(state => state.user.login)

    // this hook will move us to the LogIn page when we decide to log out
    useLogOutRedirect()
    return (
        <>
            <h2>Welcome {login} !</h2>
            <ContactForm />
            <ContactFilter />
            <h3>your contact list</h3>
            <ContactList />
        </>
    )
}

export default PhonebookPage
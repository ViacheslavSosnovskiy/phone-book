import ContactList from "../../components/ContactList"
import ContactForm from "../../components/ContactForm"
import ContactFilter from "../../components/ContactFilter"

 const PhonebookPage = () => {

    return (
        <>
        <h1>Welcome</h1>
            <ContactForm />
            <ContactFilter />
            <h3>your contact list</h3>
            <ContactList /> 
        </>
    )
}

export default PhonebookPage
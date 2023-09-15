import { useRemoveContactMutation } from "../../redux/contacts/contactsApi"

const ContactListItem = ({id, name, number}) => {
  const [removeContact, { isLoading }] = useRemoveContactMutation()
  
  return (
    <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button 
          onClick={() => removeContact(id)}
          disabled={isLoading}
        >
          delete &times;
        </button>
    </li>
  )
}

export default ContactListItem
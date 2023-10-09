import { useDispatch } from "react-redux"
import { removeContact } from "../../redux/contacts/contactsOperations"

const ContactListItem = ({id, name, number}) => {
  const dispatch = useDispatch()
  console.log('contactID -->', id)
  return (
    <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button
          onClick={() => dispatch(removeContact(id))}
        >
          delete &times;
        </button>
    </li>
  )
}

export default ContactListItem
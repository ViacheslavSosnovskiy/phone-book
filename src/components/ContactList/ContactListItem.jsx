import { useDispatch } from "react-redux"
import { removeContact } from "../../redux/contacts/contactSlice"

const ContactListItem = ({id, name, number}) => {
  const dispatch = useDispatch()
  return (
    <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => dispatch(removeContact(id))}>delete &times;</button>
    </li>
  )
}

export default ContactListItem
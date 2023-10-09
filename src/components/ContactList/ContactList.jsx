import { useSelector } from 'react-redux'
import ContactListItem from './ContactListItem'
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors'
// import { getAllContacts } from '../../redux/contacts/contactsOperations'

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts)
  // const dispatch = useDispatch()
  // const userContacts = dispatch(getAllContacts())
  return (
      <ul>
          {contacts?.map((contact) => (
            <ContactListItem 
              key={contact.id} 
              {...contact}
            />
          ))}
      </ul>
  )
}

export default ContactList
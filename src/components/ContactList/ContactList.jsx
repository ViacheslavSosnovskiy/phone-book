import { useSelector } from 'react-redux'
import ContactListItem from './ContactListItem'


const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase()
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
}

const ContactList = () => {
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter.inputValue)

  const filteredContacts = getFilteredContacts(contacts, filter)

  return (
    <>
        <ul>
            {filteredContacts?.map((contact) => (
              <ContactListItem 
                key={contact.id} 
                {...contact}
              />
            ))}
        </ul>
    </>
  )
}

export default ContactList
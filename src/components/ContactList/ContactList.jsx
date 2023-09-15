import { useSelector } from 'react-redux'
import ContactListItem from './ContactListItem'
import { useGetContactsQuery } from '../../redux/contacts/contactsApi'


const ContactList = () => {
  const { data: contacts } = useGetContactsQuery()
  const filter = useSelector(state => state.filter.inputValue)

  console.log('data-contacts: --', contacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

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
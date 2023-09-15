import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from '../../redux/contacts/contactsApi'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const { data: contacts } = useGetContactsQuery()
    const [createContact, {isLoading}] = useCreateContactMutation()

    const handleChange = e => {
      const {name, value} = e.target;

      switch(name) {
        case 'name':
          setName(value)
          break;
        case 'number':
          setNumber(value)
          break;

        default:
          break;
      }
    }

    const handleSubmit = e => {
      e.preventDefault()

      if(contacts?.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`Contact with name ${name} already exists!`)
      }
      if (contacts?.find((contact) => contact.number.replace(/\D/g, '') === number.replace(/\D/g, ''))) {
        return alert(`Number ${number} is already in contacts!`,)
      }
      createContact({name, number})
      resetContactForm()
    }

    const resetContactForm = () => {
      setName('')
      setNumber('')
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input 
            type="text"
            name="name" 
            value={name}
            onChange={handleChange}
            maxLength="22"
            required 
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label>
          Number
          <input 
            type="tel"
            name="number" 
            value={number}
            onChange={handleChange}
            maxLength="12"
            required 
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
        </label>
        <button type="submit" disabled={isLoading}>add contact</button>
      </form>
    </>
  )
}

export default ContactForm
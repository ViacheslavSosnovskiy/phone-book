import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../../redux/contacts/contactsOperations';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch()

    const handleChange = e => {
      const {name, value} = e.target;

      switch(name) {
        case 'name':
          return setName(value)

        case 'number':
          return setNumber(value)
      
        default:
          return;

      }
    }

    const handleSubmit = e => {
      e.preventDefault()

      // if(contacts?.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      //   return alert(`Contact with name ${name} already exists!`)
      // }
      // if (contacts?.find((contact) => contact.number.replace(/\D/g, '') === number.replace(/\D/g, ''))) {
      //   return alert(`Number ${number} is already in contacts!`,)
      // }
      dispatch(createContact({name, number}))
      resetContactForm()
    }

    const resetContactForm = () => {
      setName('')
      setNumber('')
    }

    const isDicebledBtn = name && number ?  true : false;

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
        <button type="submit" disabled={!isDicebledBtn}>add contact</button>
      </form>
    </>
  )
}

export default ContactForm
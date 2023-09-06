import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContactsFilter } from '../../redux/contacts/filterSlice'

const ContactFilter = () => {
  const filter = useSelector(state => state.filter.inputValue)
  const dispatch = useDispatch()

  const handleFilterChange = e => {
    dispatch(setContactsFilter(e.target.value))
  }

  return (
      <input 
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />
  )
}

export default ContactFilter
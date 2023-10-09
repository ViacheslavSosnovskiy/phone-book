import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContactsFilter } from '../../redux/filter/filterSlice'
import { selectFilter } from '../../redux/filter/filterSelectors'

const ContactFilter = () => {
  const filter = useSelector(selectFilter)
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
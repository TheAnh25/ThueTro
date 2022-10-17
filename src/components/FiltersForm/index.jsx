import React from 'react'
import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import '../FiltersForm/FiltersForm.css'

const FiltersForm = (props) => {
  const { onSubmit } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  const handleSearchTermChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (!onSubmit) return

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      }
      onSubmit(formValues)
    }, 500)
  }

  return (
    <div className="header__search__form--content">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Nhập khu vực, địa điểm cho căn hộ bạn muốn thuê"
      />
    </div>
  )
}

FiltersForm.propTypes = {
  onSubmit: PropTypes.func,
}

FiltersForm.defaultProps = {
  onSubmit: null,
}

export default FiltersForm

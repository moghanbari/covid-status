import React from 'react'
import PropTypes from 'prop-types'

const CountriesDropDown = ({ countries, countryChange }) => {
  const handleCountryChange = (event) => {
    if (event.target.value !== '0') {
      const selectedCountry = countries.find((country) => country.ID === event.target.value)
      countryChange(selectedCountry)
    } else {
      countryChange(0)
    }
  }

  return (
    <div className='grid md:grid-cols-1'>
      <div className='shadow-md p-10 xs:p-5 text-center rounded mb-3 mt-3'>
        <span>Status For: </span>
        <select className='pl-3 pt-2 pb-2 border rounded' onChange={handleCountryChange}>
          <option value={0}>World Wide</option>
          {countries &&
            countries.map((country) => (
              <option key={country.ID} value={country.ID}>
                {country.Country}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

CountriesDropDown.propTypes = {
  countries: PropTypes.array.isRequired
}

export default CountriesDropDown

import React, { useState, useEffect } from 'react'
import Overview from 'covid-status-module/ui/OverView'
import CountriesDropDown from 'covid-status-module/ui/CountriesDropDown'
import Deaths from 'covid-status-module/ui/Deaths'
import covidStatusApi from 'covid-status-module/core/covid-status.api'

const CovidStatus = () => {
  const [covidSummary, setCovidSummary] = useState({})
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function updateState() {
      const result = await covidStatusApi.getCovidStatusSummary()

      const newCases = result.Global.NewConfirmed
      const totalCases = result.Global.TotalConfirmed
      const deaths = result.Global.TotalDeaths
      setCovidSummary({ newCases, totalCases, deaths })

      const countries = result.Countries
      setCountries([...countries])
    }

    updateState()
  }, [])

  const resetData = async () => {
    const result = await covidStatusApi.getCovidStatusSummary()

    const newCases = result.Global.NewConfirmed
    const totalCases = result.Global.TotalConfirmed
    const deaths = result.Global.TotalDeaths
    setCovidSummary({ newCases, totalCases, deaths })
  }

  const setSelectedCountry = (selectedCountry) =>
    setCovidSummary({
      newCases: selectedCountry.NewConfirmed,
      totalCases: selectedCountry.TotalConfirmed,
      deaths: selectedCountry.TotalDeaths
    })

  const handleCountryChange = async (selectedCountry) => {
    if (selectedCountry === 0) {
      await resetData()
    } else {
      setSelectedCountry(selectedCountry)
    }
  }

  return (
    <>
      <CountriesDropDown countries={countries} countryChange={handleCountryChange} />
      <Overview newCases={covidSummary.newCases} totalCases={covidSummary.totalCases} />
      <Deaths deaths={covidSummary.deaths} />
    </>
  )
}

export default CovidStatus

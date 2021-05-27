const getCovidStatusSummary = async () => {
  const result = await fetch('https://api.covid19api.com/summary')

  return await result.json()
}

const covidStatusApi = { getCovidStatusSummary }
export default covidStatusApi

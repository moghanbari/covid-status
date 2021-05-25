import { BrowserRouter as Router } from 'react-router-dom'

function App({ children }) {
  return (
    <Router>
      <div className='container'>
        <main className='flex flex-col align-center justify-center text-center'>
          <div className='text-gray-500 text-3xl mt-10 mb-6'>Fetching Data</div>
        </main>
      </div>
      {children}
    </Router>
  )
}

export default App

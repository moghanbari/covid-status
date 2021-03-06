import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'shared-modules/layouts/Header'

function App({ children }) {
  return (
    <Router>
      <div className='container mx-auto max-w-lg xs:p-5'>
        <Header />
        {children}
      </div>
    </Router>
  )
}

export default App

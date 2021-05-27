import React from 'react'
import Number from 'shared-modules/components/Number'

const OverView = ({ newCases, totalCases }) => {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <div className='shadow-md bg-blue-100 p-10 text-center rounded mb-3 mt-3'>
        <div className='text-2xl'>
          <p className='font-bold'>New:</p>
          <Number number={newCases} />
        </div>
      </div>
      <div className='shadow-md bg-blue-200 p-10 text-center rounded mb-3 mt-3'>
        <div className='text-2xl'>
          <p className='font-bold'>Total:</p>
          <Number number={totalCases} />
        </div>
      </div>
    </div>
  )
}

export default OverView

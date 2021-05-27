import React from 'react'
import Number from 'shared-modules/components/Number'

const OverView = ({ newCases, totalCases }) => {
  return (
    <div className='grid grid-cols-2 xs:grid-cols-1 gap-4 xs:mt-3 xs:gap-2'>
      <div className='shadow-md bg-blue-100 p-10 text-center rounded mb-3 xs:mt-0 mt-3'>
        <div className='text-2xl'>
          <p className='font-bold'>New:</p>
          <Number number={newCases} />
        </div>
      </div>
      <div className='shadow-md bg-blue-200 p-10 text-center rounded mb-3 xs:mt-0 mt-3'>
        <div className='text-2xl'>
          <p className='font-bold'>Total:</p>
          <Number number={totalCases} />
        </div>
      </div>
    </div>
  )
}

export default OverView

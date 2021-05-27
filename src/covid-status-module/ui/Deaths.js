import React from 'react'
import Number from 'shared-modules/components/Number'

const Deaths = ({ deaths }) => {
  return (
    <div className='grid md:grid-cols-1'>
      <div className='shadow-md bg-red-100 p-10 text-center rounded mb-3 mt-3'>
        <div className='text-2xl'>
          <p className='font-bold'>Deaths:</p>
          <Number number={deaths} />
        </div>
      </div>
    </div>
  )
}

export default Deaths

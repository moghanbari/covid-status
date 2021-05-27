import React from 'react'

const About = () => (
  <div className='grid md:grid-cols-1'>
    <div className='p-10 xs:p-5 text-center rounded mb-3 mt-3'>
      <p>
        Just a simple experimental React project. API by{' '}
        <a class='text-blue-400' href='https://covid19api.com' target='_blank' rel='noreferrer'>
          covid19api.com
        </a>
        . You can see the project code in{' '}
        <a class='text-blue-400' href='https://github.com' target='_blank' rel='noreferrer'>
          here
        </a>
        . Also you can checkout my other projects at{' '}
        <a class='text-blue-400' href='https://mocode.ca' target='_blank' rel='noreferrer'>
          mocodes.ca
        </a>
      </p>
    </div>
  </div>
)

export default About

import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ to, linkText }) => (
  <NavLink
    to={to}
    exact={true}
    activeClassName='bg-gray-700'
    activeStyle={{ color: 'white' }}
    className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-gray-900'
  >
    {linkText}
  </NavLink>
)

const Header = () => {
  return (
    <>
      <h1 className='text-center text-gray-500 text-3xl mt-10 mb-6'>
        Corona Virus Status Around the World
      </h1>
      <div className='rounded relative flex items-center justify-between h-16'>
        <div className='flex space-x-4'>
          <NavigationLink to='/' linkText='Covid Status' />
          <NavigationLink to='/about' linkText='About' />
        </div>
      </div>
    </>
  )
}

export default Header

import React from 'react'
import { Avatar} from '@mui/material'
import './Navbar.css'

const APP_TITLE = 'Swg Task Manager'
const USER_NAME = 'DevBySwg'
const USER_INITIAL = 'S'

const Navbar = () => {
  return (
    <nav className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex items-center justify-between'>
      <AppTitle />
      <UserInfo />
    </nav>
  )
}


const AppTitle = () => (
  <p className='font-bold text-lg'>{APP_TITLE}</p>
)

const UserInfo = () => (
  <div className='flex items-center gap-5'>
    <p>{USER_NAME}</p>
    <Avatar src='' alt={USER_INITIAL}>{USER_INITIAL}</Avatar>
  </div>
)

export default Navbar
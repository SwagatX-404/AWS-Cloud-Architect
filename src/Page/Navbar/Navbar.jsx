import React from 'react'
import { Avatar} from '@mui/material'
import './Navbar.css'

const APP_TITLE = 'Swg Task Manager'
const USER_NAME = 'DevBySwg'
const USER_INITIAL = 'S'

const Navbar = () => {
  return (
    <nav className='container mx-auto z-50 sticky top-0 py-3 px-5 lg:px-10 flex items-center justify-between 
    backdrop-blur-md bg-white/70 dark:bg-gray-900/70
    shadow-md border-b border-gray-200 dark:border-gray-700 flex-wrap'>
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
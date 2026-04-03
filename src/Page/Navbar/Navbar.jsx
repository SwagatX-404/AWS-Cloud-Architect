import React from 'react'
import { Avatar} from '@mui/material'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5
    lg:px-10 flex items-center justify-between'>
       
        <p className='font-bold text-lg'>Swg Task manager</p>

        <div className='flex items-center gap-5'>
            <p>DevBySwg</p>
            <Avatar src=''>S</Avatar>
        </div>
    </div>
  )
}

export default Navbar
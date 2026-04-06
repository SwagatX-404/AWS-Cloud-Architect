import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
      <div className='space-y-5 h-full'>
        <div className='flex justify-center'>
          <Avatar sx={{ width: "8rem", height: "8rem" }}
          className='border-2 border-violet-600'
            src='' />
        </div>
      </div>
    </div>
  )
}

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const role="ROLE_ADMIN"
const TaskCard = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () =>{
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);

  const handleCloseUserList=()=>{
    setOpenUserList(false);
  }
  const handleOpenUserList=()=>{
    setOpenUserList(true);
    handleMenuClose()
  }
  const handleOpenSubmissionList=()=>{}
  const handleOpenUpdateTaskModel=()=>{}
  const handleDeleteTask=()=>{}

  return (
    <div>
        <div className='card lg:flex justify-between'>
            <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>

              <div className=''>
                <img className='lg:w-[7rem] lg:h-[7rem] object-cover' 
                src="" alt="" />
              </div>

              <div className='space-y-5'>
                <div className='space-y-2'>
                  <h1> Car Rental Website</h1>
                  <p>Use a latest frameworks and technology to make this website</p>
                </div>

                <div className='flex flex-wrap gap-2 items-center'>
                  {[1,1,1,1].map((item)=><span className='py-1 px-5 rounded-full techStack'>
                      Angular
                  </span>)}
                </div>
              </div>

            </div>

            <div>
              <IconButton onClick={handleMenuClick}>
                <MoreVertIcon/>
              </IconButton>

              <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby':'basic-button'
              }}>
                {
                  role==="ROLE_ADMIN"?<>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>

                

                  </>:<></>
                }
              </Menu>
            </div>
        </div>
    </div>
  )
}

export default TaskCard
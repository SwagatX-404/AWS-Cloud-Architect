import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SubmissionCard = () => {
  return (
    <div className='round-md bg-black p-5 flex items-center justify-between'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <span>Git hub :</span>
          <div className='flex items-center gap-2 text-[#c24dd0]'>
            <OpenInNewIcon/>
            <a href="/" target='_blank' rel='noopener noreferrer'>
               Go to Link
            </a>

          </div>
        </div>
        <div className='flex items-center gap-2 text-xs '>
          <p>Submission Time : </p>
          <p className='text-gray--400'> 2024-01-18T22:15:39.517343</p>
          
        </div>

      </div>

      <div>
        {
           
        }
      </div>
      
    </div>
  )
}

export default SubmissionCard
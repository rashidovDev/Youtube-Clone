import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Account : React.FC = () => {
  return (
      <div className='account'>
      <span style={{paddingRight : "5px"}}><AccountCircleIcon/></span> <span>Sign In</span>
      </div>
  )
}

export default Account
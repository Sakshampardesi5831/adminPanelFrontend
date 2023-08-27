import React, { Fragment } from 'react'
import {AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
} from '@mui/material'
import {Person} from '@mui/icons-material'
/**---------------------------------------------------------------- */

const StyleWrapper=styled(AppBar)({
  backgroundColor:"#1e0ec9",
  boxShadow:"none",
  padding:"10px 30px",
  height:"80px",
  borderBottom:"3px solid #f2f6f9",
  color:"#000"
});

const LogoHeading=styled(Typography)({
  fontSize:"30px",
  fontWeight:"900",
  color:'#fff',
  display:"flex",
  alignItems:"center",
  gap:"10px"
});

const UserHeading=styled(Typography)({
   fontSize:"25px",
   color:"#fff",
   fontWeight:"700"
});

/**----------------------------------------------------------------- */
const AdminNavbar = () => {
  return (
    <Fragment>
      <StyleWrapper position='static'>
        <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:'center',padding:"5px 10px"}}>
           <LogoHeading>
             <Person fontSize='25'/>
               User Management
           </LogoHeading>
           <UserHeading>UserName</UserHeading>
        </Toolbar>
      </StyleWrapper>
    </Fragment>
  )
}

export default AdminNavbar
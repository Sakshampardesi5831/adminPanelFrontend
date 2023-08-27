import React, { Fragment } from 'react'
import {Box,Typography,Button,Dialog,styled} from '@mui/material'
import AdminNavbar from './AdminNavbar'
import AdminUserTable from './AdminUserTable'

/**---------------------------------------------------------------------- */

/**----------------------------------------------------------------------- */
const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminNavbar/>
      <AdminUserTable/>
    </Fragment>
  )
}

export default AdminDashboard
import Box from '@mui/material/Box'
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import CardUser from '../components/CardUser'

const Users = () => {

  const [users, setUsers] = useState(false)

  const loadUsers = async () => {
    try {
      const response = await fetch('http://localhost:3100/user')
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Users">
            {users && 
              users.map(user => (
                <CardUser key={user.id} user={user} />
              ))
            }
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default Users
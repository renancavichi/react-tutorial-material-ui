import { useState } from 'react'
import Box from '@mui/material/Box'
import { FaTrash as IconTrash, FaEdit as IconEdit } from 'react-icons/fa'

const CardUser = ({user, setUsers, users}) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [pass, setPass] = useState(user.pass)
  const [avatar, setAvatar] = useState(user.avatar)
  
  const handleEdit = async (event) => {
    event.preventDefault()
    const id = parseInt(event.target.id.value)
    const name = event.target.name.value 
    const email = event.target.email.value
    const pass = event.target.pass.value
    const avatar = event.target.avatar.value
    const userEdited = {id, name, email, pass, avatar}
    try {
      const response = await fetch('http://localhost:3100/user',
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEdited), 
      })
      const data = await response.json()
      if(response.status === 200) {
      console.log(data)
      const newUsers = users.map((user) => {
        if(user.id === id) {
          return userEdited
        }
        return user
      })
      setUsers(newUsers)
      setModalOpen(false)
    } else {
      alert(data.message)
      console.log(data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch('http://localhost:3100/user/'+id,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json()
      console.log(data)
      const newUsers = users.filter((user) => user.id !== id)
      setUsers(newUsers)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Box sx={{background: '#e7e7e7', borderRadius: '10px', display: 'flex', gap: '15px', margin: '20px 0', padding: '15px', position:'relative'}}>
        <img src={user.avatar} alt={user.name} style={{width: '80px',height: '80px', borderRadius: '50%'}}/>
        <Box>
            <h3 style={{margin: '10px 0 5px 0'}}>{user.name}</h3>
            <p style={{margin: '0'}}>{user.email}</p>
        </Box>
        <IconTrash style={{width: '15px', height: '15px', position: 'absolute', top: '20px', right: '20px', padding: '10px', cursor: 'pointer' }}
          onClick={() => deleteUser(user.id)}
        />
         <IconEdit style={{width: '17px', height: '17px', position: 'absolute', top: '19px', right: '50px', padding: '10px', cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}
        />
    </Box>
    {modalOpen && 
      <Box className="bgModal" onClick={(event) => {
        if(event.target.className.includes('bgModal')) {
          setModalOpen(false)
        }
      }} sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000000A0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9
        }}>
          <Box sx={{
            width: '500px',
            height: '300px',
            background: '#FFF',
            borderRadius: '10px',
            padding: '20px',
          }}>
            <h1>Editar User</h1>
            <form onSubmit={handleEdit}>
              <input type="hidden" name="id" value={user.id} />
              <input type="text" name="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /><br />
              <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/><br />
              <input type="password" name="pass" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)}/><br />
              <input type="text" name="avatar" placeholder="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)}/><br />
              <br />
              <button type="submit">Editar</button>
            </form>
          </Box> 
      </Box>
    }
    </>
  )
}

export default CardUser
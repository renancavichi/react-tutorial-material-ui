import Box from '@mui/material/Box'

const CardUser = ({user}) => {
  return (
    <Box sx={{background: '#D3D3D3', borderRadius: '10px', display: 'flex', margin: '20px 0', padding: '15px'}}>
        <img src={user.avatar} alt={user.name} style={{width: '80px',height: '80px', borderRadius: '50%'}}/>
        <Box>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </Box>
    </Box>
  )
}

export default CardUser
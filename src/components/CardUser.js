import Box from '@mui/material/Box'

const CardUser = ({user}) => {
  return (
    <Box sx={{background: '#e7e7e7', borderRadius: '10px', display: 'flex', gap: '15px', margin: '20px 0', padding: '15px'}}>
        <img src={user.avatar} alt={user.name} style={{width: '80px',height: '80px', borderRadius: '50%'}}/>
        <Box>
            <h3 style={{margin: '10px 0 5px 0'}}>{user.name}</h3>
            <p style={{margin: '0'}}>{user.email}</p>
        </Box>
    </Box>
  )
}

export default CardUser
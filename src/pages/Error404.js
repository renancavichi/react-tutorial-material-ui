import Box from '@mui/material/Box'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'

const Error404 = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
            <h1>Opsss... Página não encontrada!</h1>
            <p>Verifique se a URL está correta.</p>
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default Error404
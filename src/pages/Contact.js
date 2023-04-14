import Box from '@mui/material/Box'
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Contato">
            <p>Esta é a página Contato!</p>
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default Contact
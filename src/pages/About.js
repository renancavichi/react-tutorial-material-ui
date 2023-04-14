import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Quem Somos">
            <p>Esta é a página de Quem Somos</p>
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default About
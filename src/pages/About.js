import Box from '@mui/material/Box'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const About = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Quem Somos">
            <p>Esta é a página de Quem Somos</p>
        </Content>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default About
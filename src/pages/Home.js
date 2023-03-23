import Box from '@mui/material/Box'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Alert from '../components/Alert'
import SampleUseState from '../components/SampleUseState'

const Home = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Home">
            <Alert type="success" >
                Deu certo!
            </Alert>
            <br />
            <Alert type="error">
                Deu Erro!
            </Alert>
            <br />
            <Alert type="info">
                Info!
            </Alert>
            <br />
            <Alert type="warning">
                Warning!
            </Alert> 

            <SampleUseState />
        </Content>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default Home
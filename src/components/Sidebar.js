import Box from '@mui/material/Box'
import fotoMontanha from './assets/img/montanha.jpeg'
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import { 
    FaCartPlus as IconCarrinhoMais,
    FaLuggageCart as IconOutroCarrinho 
} from 'react-icons/fa'
import { GiCartwheel as CarrinhoRoda } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#DDD",
            width: 200,
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
            <img 
                style={{
                    width: 200,
                    height: 123.83
                }}
                src="https://i.natgeofe.com/k/830b5d15-92db-429f-a80a-cc89b5700af5/mt-everest.jpg?w=500"
                alt="Mountain"
            />
            <hr />
            <img
                style={{
                    width: 200,
                    heigh: 120
                }}
                src={fotoMontanha}
                alt="Mountain"
            />
            <hr />
            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#345345'
            }} />
            <hr />
            <IconCarrinhoMais 
            style={{
                width: 40,
                height: 40,
                color: '#345345'
            }}
            /><hr />
            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#982234'
            }} />
            <IconOutroCarrinho />
            <CarrinhoRoda />
            <hr />        
        </Box>
    )
}

export default Sidebar
import './Header.css'
import Box from '@mui/material/Box'
import {FaReact as IconReact} from 'react-icons/fa'

const Header = () => {
    return (
        <Box component='header'>
            <Box sx={styles.stack}>
                <IconReact style={styles.logo} />
                <h3>Logo</h3>
            </Box>
        </Box>
    )
}

const styles = {
    stack: {
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        gap: '10px',
        width: 'fit-content'
    },
    logo: {
        color: '#FFF',
        width: '40px',
        height: '40px'
    }
}

export default Header
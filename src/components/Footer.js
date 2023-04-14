import Box from '@mui/material/Box'

const Footer = () => { 
    return (
        <Box component="footer" sx={styles.footer}>
            <p>Renan Cavichi</p>
        </Box>
    )
}

const styles = {
    footer: {
        background: '#555',
        color: '#000',
        padding: '20px',
        marginTop: '5px'
    }
}

export default Footer
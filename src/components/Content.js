import Box from '@mui/material/Box'

const Content = ({title, children}) => {

    return (
        <Box sx={{
            background: "#EEE",
            width: 500,
            padding: '15px'
        }}>
            <h1>{title}</h1>
            
            {children}
            
        </Box>
    )
}

export default Content
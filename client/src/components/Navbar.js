import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";



export default function ButtonAppBar() {

const navigate = useNavigate();
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar position='static' color='transparent'>
        <Container>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow:1}}>
                    <Link to='/' style={{textDecoration: 'none', color: '#eee'}}> TDD & RTT</Link>
                </Typography>
                <Button variant='contained' color='primary' onClick={() => navigate('/tasks/new')}>
                    Nueva Tarea
                </Button>
            </Toolbar>
        </Container>
        
    </AppBar>
    </Box>
        
      )
    
}
      

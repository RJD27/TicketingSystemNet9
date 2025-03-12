import {AppBar, Box, Button, Container, MenuItem, Toolbar, Typography} from "@mui/material";
import {Group} from "@mui/icons-material";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ 
                backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #4e54c8 69%, #2575fc 100%)' 
            }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <MenuItem sx={{display: 'flex', gap: 2}}>
                                <Group fontSize="large"/>
                                <Typography variant="h4" fontWeight='bold'>Ticketing System</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                            Tickets    
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                                About
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'
                            }}>
                                Contacts
                            </MenuItem>
                        </Box>
                        <Button size="large" variant="contained" color="warning">Create Ticket</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}


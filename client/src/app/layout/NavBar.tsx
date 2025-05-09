import {AppBar, Box, Container, MenuItem, Toolbar, Typography} from "@mui/material";
import {Group} from "@mui/icons-material";
import {NavLink} from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink.tsx";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ 
                backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #4e54c8 69%, #2575fc 100%)' 
            }}>
                <Container maxWidth="xl">
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{display: 'flex', gap: 2}}>
                                <Group fontSize="large"/>
                                <Typography variant="h4" fontWeight='bold'>Ticketing System</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <MenuItemLink to='/tickets'>
                                Tickets    
                            </MenuItemLink>
                            <MenuItemLink to='/createTicket'>
                                Create Ticket
                            </MenuItemLink>
                        </Box>
                        <MenuItem>
                            User Menu
                        </MenuItem>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}


import {useState} from 'react'
import {Box, Container, CssBaseline, Typography} from "@mui/material";
import NavBar from "./NavBar.tsx";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard.tsx";
import {useTickets} from "../../lib/hooks/useTickets.ts";

function App() {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const {tickets, isPending} = useTickets();
    const handleSelectTicket = (id: string) => {
        setSelectedTicket(tickets!.find((x) => x.id === id));
    }

    const handleCancelSelectTicket = () => {
        setSelectedTicket(undefined);
    }

    const handleOpenForm = (id?: string) => {
        if (id) handleSelectTicket(id);
        else handleCancelSelectTicket();
        setEditMode(true);
    }

    const handleFormClose = () => {
        setEditMode(false);
    }

    return (
        <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
            <CssBaseline/>
            <NavBar openForm={handleOpenForm}/>
            <Container maxWidth='xl' sx={{mt: 3}}>
                {!tickets || isPending ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <TicketDashboard
                        tickets={tickets}
                        selectTicket={handleSelectTicket}
                        cancelSelectTicket={handleCancelSelectTicket}
                        selectedTicket={selectedTicket}
                        editMode={editMode}
                        openForm={handleOpenForm}
                        closeForm={handleFormClose}
                    />
                )}
            </Container>
        </Box>
    )
}

export default App

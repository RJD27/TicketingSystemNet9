import {useEffect, useState } from 'react'
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard.tsx";
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);

  useEffect(() => {
    axios.get<Ticket[]>('https://localhost:5001/api/tickets') // fetch returns a promise
        .then(response => setTickets(response.data))
      
      return () => {}
  }, []);
  
  const handleSelectTicket = (id: string) => {
      setSelectedTicket(tickets.find((x) => x.id === id));
  }
  
  const handleCancelSelectTicket = () => {
      setSelectedTicket(undefined);
  }
  
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
        <CssBaseline/>
        <NavBar />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <TicketDashboard 
                  tickets={tickets} 
                  selectTicket={handleSelectTicket}
                  cancelSelectTicket={handleCancelSelectTicket}
                  selectedTicket={selectedTicket}
              />
          </Container>
      </Box>
  )
}

export default App

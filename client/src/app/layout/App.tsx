import {useEffect, useState } from 'react'
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import TicketDashboard from "../../features/tickets/dashboard/TicketDashboard.tsx";
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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
  
  const handleOpenForm = (id?: string) => {
      if (id) handleSelectTicket(id);
      else handleCancelSelectTicket();
      setEditMode(true);
  }
  
  const handleFormClose = () => {
      setEditMode(false);
  }
  
  const handleSubmitForm = (ticket: Ticket) => {
      if (ticket.id) {
          setTickets(tickets.map(x => x.id === ticket.id ? ticket : x))
      } else {
          const newTicket = {...ticket, id: tickets.length.toString()}
          setSelectedTicket(newTicket);
          setTickets([...tickets, newTicket]);
      }
      setEditMode(false);
  }
  
  const handleDelete = (id: string) => {
      setTickets(tickets.filter(x => x.id !== id))
  }
  
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
        <CssBaseline/>
        <NavBar openForm={handleOpenForm} />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <TicketDashboard 
                  tickets={tickets} 
                  selectTicket={handleSelectTicket}
                  cancelSelectTicket={handleCancelSelectTicket}
                  selectedTicket={selectedTicket}
                  editMode={editMode}
                  openForm={handleOpenForm}
                  closeForm={handleFormClose}
                  submitForm={handleSubmitForm}
                  deleteTicket={handleDelete}
              />
          </Container>
      </Box>
  )
}

export default App

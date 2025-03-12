import {useEffect, useState } from 'react'
import {Container, CssBaseline, List, ListItem, ListItemText} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    axios.get<Ticket[]>('https://localhost:5001/api/tickets') // fetch returns a promise
        .then(response => setTickets(response.data))
      
      return () => {}
  }, []);
  
  return (
      <>
        <CssBaseline/>
        <NavBar />
          <Container maxWidth='xl' sx={{mt: 3}}>
              <List>
                  {tickets.map((ticket) => (
                      <ListItem key={ticket.id}>
                          <ListItemText>{ticket.title}</ListItemText>
                      </ListItem>
                  ))}
              </List>
          </Container>
      </>
  )
}

export default App

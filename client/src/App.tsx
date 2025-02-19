import {useEffect, useState } from 'react'
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import axios from "axios";
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    axios.get<Ticket[]>('https://localhost:5001/api/tickets') // fetch returns a promise
        .then(response => setTickets(response.data))
      
      return () => {}
  }, []);
  
  return (
      <>
        <Typography variant='h3'>Ticketing System</Typography>
        <List>
          {tickets.map((ticket) => (
              <ListItem key={ticket.id}>
                  <ListItemText>{ticket.title}</ListItemText>
              </ListItem>
          ))}
        </List>
      </>
  )
}

export default App

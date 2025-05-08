import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";
import {useTickets} from "../../../lib/hooks/useTickets.ts";

type Props = {
    selectedTicket: Ticket;
    cancelSelectTicket: () => void;
    openForm: (id: string) => void;
}

export default function TicketDetails({selectedTicket, cancelSelectTicket, openForm}: Props) {
    const {tickets, deleteTicket} = useTickets();
    const ticket = tickets?.find((x) => x.id === selectedTicket.id);
    
    if (!ticket) return <Typography>Loading...</Typography>
    
    return (
        <Card sx={{borderRadius: 3}}>
            <CardContent>
                <Typography variant="h5">{ticket.title}</Typography>
                <Typography sx={{color: 'text.secondary', mb: 1}}>{ticket.date}</Typography>
                <Typography variant="body2">{ticket.description}</Typography>
                <Typography variant="subtitle1">{ticket.status} / {ticket.priority}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2}}>
                <Chip label={ticket.priority} variant="outlined" />
                <Box display='flex' gap={3}>
                    <Button onClick={()=>openForm(ticket.id)} size="medium"
                            variant="contained">Edit</Button>
                    <Button onClick={()=>{deleteTicket.mutate(ticket.id); cancelSelectTicket();}} 
                            disabled={deleteTicket.isPending}
                            color='error' 
                            size="medium"
                            variant="contained">Delete</Button>
                    <Button onClick={cancelSelectTicket} color='warning' size="medium"
                            variant="contained">Cancel</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

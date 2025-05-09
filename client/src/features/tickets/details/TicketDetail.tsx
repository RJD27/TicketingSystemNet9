import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router";
import {useTickets} from "../../../lib/hooks/useTickets.ts";

export default function TicketDetail() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {deleteTicket, ticket, isLoadingTicket} = useTickets(id);
    
    if (isLoadingTicket) return <Typography>Loading...</Typography>
    
    if (!ticket) return <Typography>Ticket not found</Typography>
    
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
                    <Button component={Link} to={`/manage/${ticket.id}`} size="medium"
                            variant="contained">Edit</Button>
                    <Button onClick={()=>deleteTicket.mutate(ticket.id)} 
                            disabled={deleteTicket.isPending}
                            color='error' 
                            size="medium"
                            variant="contained">Delete</Button>
                    <Button onClick={() => navigate('/tickets')} color='warning' size="medium" 
                            variant="contained">Cancel</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

import {Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";

type Props = {
    ticket: Ticket
    selectTicket: (id: string) => void
}

export default function TicketCard({ ticket, selectTicket }: Props) {
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
                <Button onClick={()=>selectTicket(ticket.id)} size="medium" variant="contained">View</Button>
            </CardActions>
        </Card>
    )
}

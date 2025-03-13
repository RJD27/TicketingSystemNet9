import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

type Props = {
    ticket: Ticket
    cancelSelectTicket: () => void
}

export default function TicketDetails({ticket, cancelSelectTicket}: Props) {
    return (
        <Card sx={{borderRadius: 3}}>
            <CardMedia component="img" />
            <CardContent>
                <Typography variant="h5">{ticket.title}</Typography>
                <Typography variant="subtitle1" fontWeight='light'>{ticket.date}</Typography>
                <Typography variant="body1">{ticket.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">Edit</Button>
                <Button onClick={cancelSelectTicket} color="inherit">Cancel</Button>
            </CardActions>
        </Card>
    )
}

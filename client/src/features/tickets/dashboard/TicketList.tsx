import {Box} from "@mui/material";
import TicketCard from "./TicketCard.tsx";

type Props = {
    tickets: Ticket[]
    selectTicket: (id: string) => void
}

export default function TicketList({tickets, selectTicket}: Props) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} selectTicket={selectTicket} />
            ))}
        </Box>
    )
}

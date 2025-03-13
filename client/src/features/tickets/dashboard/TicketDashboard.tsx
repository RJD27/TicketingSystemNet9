import {Grid2, List} from "@mui/material";
import TicketList from "./TicketList.tsx";
import TicketDetail from "../details/TicketDetail.tsx";

type Props = {
    tickets: Ticket[]
    selectTicket: (id: string) => void
    cancelSelectTicket: () => void
    selectedTicket?: Ticket
}

export default function TicketDashboard({tickets, cancelSelectTicket, selectTicket, 
                                            selectedTicket}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <List>
                    <TicketList 
                        tickets={tickets}
                        selectTicket={selectTicket}
                    />
                </List>
            </Grid2>
            <Grid2 size={5}>
                {selectedTicket && <TicketDetail 
                    ticket={selectedTicket} 
                    cancelSelectTicket={cancelSelectTicket}
                />
                }
            </Grid2>
        </Grid2>
    )
}

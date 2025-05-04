import {Grid2, Modal} from "@mui/material";
import TicketTable from "./TicketTable.tsx";
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
        <>
            <TicketTable tickets={tickets} selectTicket={selectTicket}/>
            <Modal
                open={!!selectedTicket}
                onClose={cancelSelectTicket}
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Grid2 size={5}>
                    {selectedTicket && (
                        <TicketDetail ticket={selectedTicket} cancelSelectTicket={cancelSelectTicket} />
                    )}
                </Grid2>
            </Modal>
        </>
    )
}

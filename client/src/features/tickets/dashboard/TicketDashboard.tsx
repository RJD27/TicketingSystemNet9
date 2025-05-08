import {Grid2, Dialog} from "@mui/material";
import TicketTable from "./TicketTable.tsx";
import TicketDetail from "../details/TicketDetail.tsx";
import TicketForm from "../form/TicketForm.tsx";

type Props = {
    tickets: Ticket[];
    selectTicket: (id: string) => void;
    cancelSelectTicket: () => void;
    selectedTicket?: Ticket;
    openForm: (id:string) => void;
    closeForm: () => void;
    editMode: boolean;
}

export default function TicketDashboard({tickets, cancelSelectTicket, 
                                            selectTicket, 
                                            selectedTicket, 
                                            openForm, 
                                            closeForm, 
                                            editMode,}
                                        : Props) {
    return (
        <>
            <TicketTable 
                tickets={tickets} 
                selectTicket={selectTicket}
            />
            <Dialog open={editMode} onClose={closeForm}>
                <Grid2 size={5}>
                    <TicketForm 
                        closeForm={closeForm} 
                        ticket={selectedTicket} 
                    />
                </Grid2>
            </Dialog>
            <Dialog open={!!selectedTicket} onClose={cancelSelectTicket}>
                <Grid2 size={5}>
                    {selectedTicket && !editMode &&
                        <TicketDetail 
                            selectedTicket={selectedTicket} 
                            cancelSelectTicket={cancelSelectTicket} 
                            openForm={openForm}
                        />}
                </Grid2>
            </Dialog>
        </>
    )
}

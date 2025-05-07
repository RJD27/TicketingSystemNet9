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
    submitForm: (ticket: Ticket) => void;
    deleteTicket: (id: string) => void;
}

export default function TicketDashboard({tickets, cancelSelectTicket, 
                                            selectTicket, 
                                            selectedTicket, 
                                            openForm, 
                                            closeForm, 
                                            editMode,
                                            submitForm,
                                            deleteTicket,}
                                        : Props) {
    return (
        <>
            <TicketTable 
                tickets={tickets} 
                selectTicket={selectTicket}
                deleteTicket={deleteTicket}
            />
            <Dialog open={editMode} onClose={closeForm}>
                <Grid2 size={5}>
                    <TicketForm 
                        closeForm={closeForm} 
                        ticket={selectedTicket} 
                        submitForm={submitForm}
                    />
                </Grid2>
            </Dialog>
            <Dialog open={!!selectedTicket} onClose={cancelSelectTicket}>
                <Grid2 size={5}>
                    {selectedTicket && !editMode &&
                        <TicketDetail 
                            ticket={selectedTicket} 
                            cancelSelectTicket={cancelSelectTicket} 
                            openForm={openForm}
                            deleteTicket={deleteTicket}
                        />}
                </Grid2>
            </Dialog>
        </>
    )
}

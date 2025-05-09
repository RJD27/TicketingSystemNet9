import {Grid2} from "@mui/material";
import TicketTable from "./TicketTable.tsx";

export default function TicketDashboard() {
    return (
        <>
            <Grid2 container spacing={3}>
                <TicketTable />
                <Grid2 size={5}>
                    filters maybe
                </Grid2>
            </Grid2>
        </>
    )
}

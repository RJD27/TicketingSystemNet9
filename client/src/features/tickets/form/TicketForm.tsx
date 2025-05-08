import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {FormEvent} from "react";
import {useTickets} from "../../../lib/hooks/useTickets.ts";

type Props = {
    ticket?: Ticket;
    closeForm: () => void;
}

export default function TicketForm({ticket, closeForm}: Props) {
    const {updateTicket, createTicket} = useTickets();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        
        const data: {[key: string]: FormDataEntryValue} = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        if (ticket) {
            data.id = ticket.id;
            await updateTicket.mutateAsync(data as unknown as Ticket);
            closeForm();
        } else {
            await createTicket.mutateAsync(data as unknown as Ticket);
            closeForm();
        }
    }
    return (
        <Paper sx={{borderRadius: 3, padding: 3}}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Ticket
            </Typography>
            <Box component="form" onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name='title' label='Title' defaultValue={ticket?.title} />
                <TextField name='description' label='Description' defaultValue={ticket?.description} multiline rows={3} />
                <TextField name='status' label='Status' defaultValue={ticket?.status} />
                <TextField name='date' label='Date' type='date' 
                           defaultValue={ticket?.date 
                               ? new Date(ticket.date).toISOString().split('T')[0] 
                               : new Date().toISOString().split('T')[0]} 
                />
                <TextField name='priority' label='Priority' defaultValue={ticket?.priority} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={closeForm} color='inherit'>Cancel</Button>
                    <Button 
                        type="submit" 
                        color='success' 
                        variant='contained'
                        disabled={updateTicket.isPending || createTicket.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}

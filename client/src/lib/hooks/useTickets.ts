import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import agent from "../api/agent";

export const useTickets = (id?: string) => {
    const queryClient = useQueryClient();
    
    const {data: tickets, isPending} = useQuery({
        queryKey: ['tickets'],
        queryFn: async () => {
            const response = await agent.get<Ticket[]>('/tickets');
            return response.data;
        }
    });
    
    const {data: ticket, isLoading: isLoadingTicket} = useQuery({
        queryKey: ['tickets', id],
        queryFn: async () => {
            const response = await agent.get<Ticket>(`/tickets/${id}`);
            return response.data;
        },
        enabled: !!id
    })
    
    const updateTicket = useMutation({
        mutationFn: async (ticket: Ticket) => {
            await agent.put(`/tickets`, ticket)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['tickets']
            })
        }
    })

    const createTicket = useMutation({
        mutationFn: async (ticket: Ticket) => {
            const response = await agent.post(`/tickets`, ticket)
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['tickets']
            })
        }
    })

    const deleteTicket = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/tickets/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['tickets']
            })
        }
    })
    
    return {
        tickets,
        isPending,
        updateTicket,
        createTicket,
        deleteTicket,
        ticket,
        isLoadingTicket,
    }
}
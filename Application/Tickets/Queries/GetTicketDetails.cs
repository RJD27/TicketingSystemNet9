using Domain;
using MediatR;
using Persistence;

namespace Application.Tickets.Queries;

public class GetTicketDetails
{
    public class Query : IRequest<Ticket>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Ticket>
    {
        public async Task<Ticket> Handle(Query request, CancellationToken cancellationToken)
        {
            var ticket = await context.Tickets.FindAsync([request.Id], cancellationToken);
            
            if (ticket == null) throw new Exception("Ticket not found");
            
            return ticket;
        }
    }
}
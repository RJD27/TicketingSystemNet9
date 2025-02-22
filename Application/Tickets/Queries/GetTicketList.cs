using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Tickets.Queries;

public class GetTicketList
{
    public class Query : IRequest<List<Ticket>> {}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Ticket>> // Gives AppDbContext access to API
    {
        public async Task<List<Ticket>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Tickets.ToListAsync(cancellationToken);
        }
    }
}
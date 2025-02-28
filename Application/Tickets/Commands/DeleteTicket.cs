using MediatR;
using Persistence;

namespace Application.Tickets.Commands;

public class DeleteTicket
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var ticket = await context.Tickets
                             .FindAsync([request.Id], cancellationToken)
                         ?? throw new Exception("Ticket not found");
            context.Remove(ticket);
            
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
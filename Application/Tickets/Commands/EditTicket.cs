using System.Windows.Input;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Tickets.Commands;

public class EditTicket
{
    public class Command : IRequest
    {
        public Ticket Ticket { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var ticket = await context.Tickets
                .FindAsync([request.Ticket.Id], cancellationToken)
                ?? throw new Exception("Ticket not found");
            
            mapper.Map(request.Ticket, ticket); // Easy way to overwrite properties
            
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
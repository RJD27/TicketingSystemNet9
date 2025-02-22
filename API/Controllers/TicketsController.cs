using Application.Tickets.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TicketsController(IMediator mediator) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Ticket>>> GetTickets()
    {
        return await mediator.Send(new GetTicketList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Ticket>> GetTicketDetail(string id)
    {
        return await mediator.Send(new GetTicketDetails.Query { Id = id });
    }
}
using Application.Tickets.Commands;
using Application.Tickets.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TicketsController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Ticket>>> GetTickets()
    {
        return await Mediator.Send(new GetTicketList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Ticket>> GetTicketDetail(string id)
    {
        return await Mediator.Send(new GetTicketDetails.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateTicket(Ticket ticket)
    {
        return await Mediator.Send(new CreateTicket.Command { Ticket = ticket });
    }

    [HttpPut]
    public async Task<ActionResult<string>> EditTicket(Ticket ticket)
    {
        await Mediator.Send(new EditTicket.Command { Ticket = ticket });
        
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<string>> DeleteTicket(string id)
    {
        await Mediator.Send(new DeleteTicket.Command { Id = id });
        return Ok();
    }
}
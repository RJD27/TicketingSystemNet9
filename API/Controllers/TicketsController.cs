using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class TicketsController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Ticket>>> GetTickets()
    {
        return await context.Tickets.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Ticket>> GetTicketDetail(string id)
    {
        var ticket = await context.Tickets.FindAsync(id);
        
        if (ticket == null) return NotFound();
        
        return ticket;
    }
}
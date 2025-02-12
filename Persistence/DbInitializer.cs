using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Tickets.Any()) return;

        var tickets = new List<Ticket>
        {
            new()
            {
                Title = "Password Reset Request",
                Date = DateTime.Now.AddDays(-10), // 10 days ago
                Description = "My password for the internal system needs to be reset. I've forgotten it.",
                Status = "Resolved",
                Priority = "High"
            },
            new()
            {
                Title = "Software Installation Issue",
                Date = DateTime.Now.AddDays(-5), // 5 days ago
                Description = "I'm having trouble installing the new CRM software.  I'm getting an error message: 'Installation Failed'.",
                Status = "Closed",
                Priority = "Medium"
            },
            new()
            {
                Title = "Network Connectivity Problems",
                Date = DateTime.Now.AddDays(2), // In 2 days
                Description = "Intermittent network connectivity issues in the conference room.  Wi-Fi is dropping frequently.",
                Status = "Open",
                Priority = "High"
            },
            new()
            {
                Title = "Printer Malfunction",
                Date = DateTime.Now.AddDays(7), // In 7 days
                Description = "The office printer is jamming constantly.  Needs maintenance or replacement.",
                Status = "Open",
                Priority = "Medium"
            },
            new()
            {
                Title = "New Employee Onboarding",
                Date = DateTime.Now.AddDays(15), // In 15 days
                Description = "Requesting IT setup for a new employee starting on [Date].  Needs laptop, accounts, etc.",
                Status = "Open",
                Priority = "Low"
            },
            new()
            {
                Title = "Email Account Setup",
                Date = DateTime.Now.AddDays(20), // In 20 days
                Description = "Need a new email account created for [Employee Name].",
                Status = "Open",
                Priority = "Medium"
            },
            new()
            {
                Title = "VPN Access Request",
                Date = DateTime.Now.AddDays(25), // In 25 days
                Description = "Requesting VPN access for remote work.",
                Status = "Open",
                Priority = "Low"
            },
            new()
            {
                Title = "System Performance Issue",
                Date = DateTime.Now.AddDays(30), // In 30 days
                Description = "The main application is running very slowly.  Users are reporting performance issues.",
                Status = "Open",
                Priority = "High"
            },
            new()
            {
                Title = "Data Backup Issue",
                Date = DateTime.Now.AddDays(35), // In 35 days
                Description = "Concerned about the recent data backup.  Need to verify its integrity.",
                Status = "Open",
                Priority = "Medium"
            },
            new()
            {
                Title = "Hardware Upgrade Request",
                Date = DateTime.Now.AddDays(40), // In 40 days
                Description = "Requesting a hardware upgrade for my workstation.  Current machine is outdated.",
                Status = "Open",
                Priority = "Low"
            }
        };
        
        context.Tickets.AddRange(tickets);
        await context.SaveChangesAsync();
    }
}
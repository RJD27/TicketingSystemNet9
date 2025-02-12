namespace Domain;

public class Ticket
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // strings are easier to work with then Guid
    public required string Title { get; set; }
    public DateTime Date { get; set; }
    public required string Description { get; set; }
    public required string Status { get; set; }
    public required string Priority { get; set; }
    
}
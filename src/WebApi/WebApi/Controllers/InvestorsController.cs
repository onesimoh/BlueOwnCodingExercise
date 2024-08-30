using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class InvestorsController : ControllerBase
{
    private readonly ILogger<InvestorsController> _logger;

    public InvestorsController(ILogger<InvestorsController> logger)
    {
        _logger = logger;
    }

    [HttpGet("Ping")]
    public IActionResult Ping()
    {
        return Ok(new Pong());
    }
}

public sealed class Pong
{
    public string Response => "Pong";
}
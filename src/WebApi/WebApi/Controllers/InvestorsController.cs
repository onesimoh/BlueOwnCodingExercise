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

    [HttpGet(Name = "Ping")]
    public string Ping()
    {
        return "Pong";
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestApp.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpGet]
        [Route("GetSquare/{number}")]
        public decimal GetSquare(long number)
        {
            return number * number;
        }

        [HttpGet]
        [Route("GetSum/{number1}/{number2}")]

        public decimal GetSum(long number1, long number2)
        {
            return number1 + number2;
        }

        [HttpPost]
        [Route("GetObject")]

        public object GetObject([FromBody] object personalInformation)
            //public return type method(sending type attribute)
        {
            return personalInformation;
        }
        [HttpPost]
        [Route("SetUserText")]
        public string SetUserText([FromBody] object personal)
        {
            return personal.ToString(); 
        }

    }
}

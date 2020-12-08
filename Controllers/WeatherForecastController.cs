using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
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
        private readonly IMemoryCache _memoryCache;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IMemoryCache memoryCache)
        {
            _logger = logger;
            _memoryCache = memoryCache;
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
            _memoryCache.Set("MY_KEY", personal);
            //HttpContext.Current.Cache.Insert(
            //   key,
            //   o,
            //   null,
            //   DateTime.Now.AddMinutes(Timeout),
            //   System.Web.Caching.Cache.NoSlidingExpiration);*/
            return personal.ToString(); 
        }
        [HttpGet]
        [Route("GetUserText")]
        public object GetUserText()
        {
            var obj = _memoryCache.Get("MY_KEY");
            return obj;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DailyAtHome.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Admin")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {
        [HttpGet]
        public IEnumerable<string> AddNewCategory()
        {
            return new string[] { "value1", "value2" };
        }
    }
}

using DailyAtHome.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DailyAtHome.WebAPI.Controllers
{
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiController
    {
        dahDBEntities dahEntity = new dahDBEntities();

        public AdminController()
        {
            dahEntity.Configuration.ProxyCreationEnabled = false;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddCategory")]
        public IHttpActionResult AddCategory(DAH_Categories Category)
        {
            try
            {
                dahEntity.DAH_SP_AddCategory(Category.Category, Category.Description);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("UpdateCategory")]
        public IHttpActionResult UpdateCategory(DAH_Categories Category)
        {
            try
            {
                dahEntity.DAH_SP_UpdateCategory(Category.ID, Category.Category, Category.Description);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}

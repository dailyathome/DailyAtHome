using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DailyAtHome.DataAccess;

namespace DailyAtHome.WebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Header")]
    public class HeaderController : ApiController
    {

        dahDBEntities dahEntity = new dahDBEntities();
        public HeaderController()
        {
            dahEntity.Configuration.ProxyCreationEnabled = false;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetCategories")]
        public List<category> GetCategories()
        {
            List<category> categoriesList = new List<category>();
            List<subcategory> SubcategoriesList = new List<subcategory>();

            categoriesList = dahEntity.categories.ToList();
            SubcategoriesList = GetSubCategories();
            foreach (category cat in categoriesList)
            {
                cat.subcategories = SubcategoriesList.Where(x => x.categoryid == cat.id).ToList();
            }
            return categoriesList;
        }

        public List<subcategory> GetSubCategories()
        {
            List<subcategory> SubcategoriesList = new List<subcategory>();

            SubcategoriesList = dahEntity.subcategories.ToList();

            return SubcategoriesList;
        }
    }
}

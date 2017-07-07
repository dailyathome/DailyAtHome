﻿using System;
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
        public List<DAH_Categories> GetCategories()
        {
            List<DAH_Categories> categoriesList = new List<DAH_Categories>();
            List<DAH_SubCategories> SubcategoriesList = new List<DAH_SubCategories>();

            categoriesList = dahEntity.DAH_Categories.ToList();
            SubcategoriesList = GetSubCategories();
            foreach (DAH_Categories cat in categoriesList)
            {
                cat.DAH_SubCategories = SubcategoriesList.Where(x => x.CategoryID == cat.ID).ToList();
            }
            return categoriesList;
        }

        public List<DAH_SubCategories> GetSubCategories()
        {
            List<DAH_SubCategories> SubcategoriesList = new List<DAH_SubCategories>();

            SubcategoriesList = dahEntity.DAH_SubCategories.ToList();

            return SubcategoriesList;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DailyAtHome.DataAccess;

namespace DailyAtHome.WebAPI.Controllers
{
  
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
        public List<DAH_Products>GetProductsBySubCategory(int ID)
        {
            List<DAH_Products> products = new List<DAH_Products>();
            products = dahEntity.DAH_Products.Where(s => s.SubCategoryID == ID).ToList();
            return products;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Admin")]
        public string UpdateCategory(DAH_Categories Category)
        {
            try
            {
                dahDBEntities entity = new dahDBEntities();

                entity.DAH_SP_UpdateCategory(Category.ID, Category.Category, Category.Description);

                return "Update Successful";
            }
            catch(Exception)
            {
                return "Update Failed";
            }
        }
    }
}

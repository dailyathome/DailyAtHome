using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DailyAtHome.DataAccess;
using DailyAtHome.DataAccess.Models;
using System.Threading.Tasks;

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

        #region Public Methods

        [HttpGet]
        [AllowAnonymous]
        [Route("GetCategories")]
        public List<Categories> GetCategories()
        {
            List<DAH_Categories> DALcategoriesList = new List<DAH_Categories>();
            List<SubCategories> AppSubcategoriesList = new List<SubCategories>();
            List<Categories> categoriesList = new List<Categories>();

            DALcategoriesList = dahEntity.DAH_Categories.ToList();
            categoriesList = ConvertToAppCategories(DALcategoriesList);

            AppSubcategoriesList = GetSubCategories();


            foreach (Categories cat in categoriesList)
            {
                cat.SubCategoriesList = AppSubcategoriesList.Where(x => x.CategoryID == cat.ID).ToList();
            }

            //Categories cat1 = new Categories { Category = "Test1", Description = "Test1", ID = 1 };
            //Categories cat2 = new Categories { Category = "Test2", Description = "Test2", ID = 2 };
            //categoriesList.Add(cat1);
            //categoriesList.Add(cat2);

            return categoriesList;
        }

        public List<SubCategories> GetSubCategories()
        {
            List<DAH_SubCategories> DALSubcategoriesList = new List<DAH_SubCategories>();
            List<SubCategories> SubCategoryList = new List<SubCategories>();

            DALSubcategoriesList = dahEntity.DAH_SubCategories.ToList();
            SubCategoryList = ConvertToAppSubCategories(DALSubcategoriesList);
            return SubCategoryList;
        }

        public List<DAH_Products>GetProductsBySubCategory(int ID)
        {
            List<DAH_Products> products = new List<DAH_Products>();
            products = dahEntity.DAH_Products.Where(s => s.SubCategoryID == ID).ToList();
            return products;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("UpdateCategory")]
        public IHttpActionResult UpdateCategory(DAH_Categories Category)
        {
            try
            {
                dahDBEntities entity = new dahDBEntities();

                entity.DAH_SP_UpdateCategory(Category.ID, Category.Category, Category.Description);

                return Ok();
            }
            catch(Exception)
            {
                return InternalServerError();
            }
        }
        #endregion

        #region Private Methods
        private List<SubCategories> ConvertToAppSubCategories(List<DAH_SubCategories> dALSubcategoriesList)
        {
            List<SubCategories> SubCategoriesList = new List<SubCategories>();
            SubCategories AppSubCategory = new SubCategories();

            foreach (DAH_SubCategories SubCategory in dALSubcategoriesList)
            {
                AppSubCategory.ID = SubCategory.ID;
                AppSubCategory.SubCategory = SubCategory.SubCategory;
                AppSubCategory.CategoryID = SubCategory.CategoryID;
                AppSubCategory.Description = SubCategory.Description;
                AppSubCategory.ImageID = SubCategory.ImageID;

                SubCategoriesList.Add(AppSubCategory);
            }

            return SubCategoriesList;

        }

        private List<Categories> ConvertToAppCategories(List<DAH_Categories> dALcategoriesList)
        {
            List<Categories> AppCategoryList = new List<Categories>();

            foreach (DAH_Categories DalCategory in dALcategoriesList)
            {
                Categories Category = new Categories();
                Category.ID = DalCategory.ID;
                Category.Category = DalCategory.Category;
                Category.Description = DalCategory.Description;

                AppCategoryList.Add(Category);
            }
            return AppCategoryList;
        }
        #endregion
    }
}

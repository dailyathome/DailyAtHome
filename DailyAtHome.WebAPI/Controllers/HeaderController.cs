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

        public List<DAH_Products> GetProductsBySubCategory(int ID)
        {
            List<DAH_Products> products = new List<DAH_Products>();
            products = dahEntity.DAH_Products.Where(s => s.SubCategoryID == ID).ToList();
            return products;
        }

        public List<Products> GetProducts(string search = null)
        {
            List<DAH_Products> products = dahEntity.DAH_Products.ToList();
            List<Products> domainProducts = new List<Products>();
            products.ForEach(p => domainProducts.Add(
                new Products() { Cost = p.Cost, Description = p.Description, ID = p.ID, Product = p.Product, SubCategoryID = p.SubCategoryID }
                ));
            if (string.IsNullOrWhiteSpace(search))
                return domainProducts;
            else return domainProducts.Where(p => p.Product.Contains(search)).ToList();
        }

        public List<SubCategoriesByCategoryID> GetSubcategoriesByCategoryID(int id)
        {
            List<DAH_SP_GetSubCategoryByCategory_Result> DBSubCategoriesByCategoryID = dahEntity.DAH_SP_GetSubCategoryByCategory(id).ToList();
            List<SubCategoriesByCategoryID> SubCategoriesByCategoryID = ConvertToAppSubCategoriesByCategories(DBSubCategoriesByCategoryID);

            return SubCategoriesByCategoryID;
        }
        #endregion

        #region Private Methods
        private List<SubCategories> ConvertToAppSubCategories(List<DAH_SubCategories> dALSubcategoriesList)
        {
            List<SubCategories> SubCategoriesList = new List<SubCategories>();


            foreach (DAH_SubCategories SubCategory in dALSubcategoriesList)
            {
                SubCategories AppSubCategory = new SubCategories();
                AppSubCategory.ID = SubCategory.ID;
                AppSubCategory.SubCategory = SubCategory.SubCategory;
                AppSubCategory.CategoryID = SubCategory.CategoryID;
                AppSubCategory.Description = SubCategory.Description;
                AppSubCategory.ImageID = SubCategory.ImageID;

                SubCategoriesList.Add(AppSubCategory);
            }

            return SubCategoriesList;

        }

        private List<SubCategoriesByCategoryID> ConvertToAppSubCategoriesByCategories(List<DAH_SP_GetSubCategoryByCategory_Result> dALSubcategoriesList)
        {
            List<SubCategoriesByCategoryID> SubCategoriesByCategoryList = new List<SubCategoriesByCategoryID>();


            foreach (DAH_SP_GetSubCategoryByCategory_Result SubCategory in dALSubcategoriesList)
            {
                SubCategoriesByCategoryID AppSubCategory = new SubCategoriesByCategoryID();
                AppSubCategory.SubCategory = SubCategory.SubCategory;
                AppSubCategory.Category = SubCategory.Category;
                AppSubCategory.Description = SubCategory.Description;
                AppSubCategory.CategoryID = SubCategory.CategoryID;
                AppSubCategory.ID = SubCategory.ID;

                SubCategoriesByCategoryList.Add(AppSubCategory);
            }

            return SubCategoriesByCategoryList;

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

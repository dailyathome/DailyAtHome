using DailyAtHome.DataAccess;
using DailyAtHome.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace DailyAtHome.WebAPI.Controllers
{
    [System.Web.Http.RoutePrefix("api/Home")]
    public class HomeController : ApiController
    {
        dahDBEntities dahEntity = new dahDBEntities();
        public HomeController()
        {
            dahEntity.Configuration.ProxyCreationEnabled = false;
        }

        public void Index()
        {
            
        }

        #region Public Methods
        public List<Products> GetRandomProducts()
        {
            List<DAH_SP_GetRandomProducts_Result> products = new List<DAH_SP_GetRandomProducts_Result>();
            List<Products> AppProducts = new List<Products>();
            //products = dahEntity.DAH_Products.Where(s => s.SubCategoryID == ID).ToList();
            products = dahEntity.DAH_SP_GetRandomProducts().ToList();
            AppProducts = ConvertToAppProducts(products);
            return AppProducts;
        }

        #endregion

        #region Private Methods
        private List<Products> ConvertToAppProducts(List<DAH_SP_GetRandomProducts_Result> products)
        {
            List<Products> AppProductsList = new List<Products>();

            foreach (DAH_SP_GetRandomProducts_Result DALProduct in products)
            {
                Products AppProduct = new Products();
                AppProduct.ID = DALProduct.ID;
                AppProduct.Product = DALProduct.Product;
                AppProduct.Description = DALProduct.Description;
                AppProduct.IsAvailable = DALProduct.IsAvailable;
                AppProduct.Cost = DALProduct.Cost;
                AppProduct.ImageID = DALProduct.ImageID;
                AppProduct.Image = DALProduct.Image;
                AppProduct.SubCategoryID = DALProduct.SubCategoryID;
                AppProduct.SubCategory = DALProduct.SubCategory;

                AppProductsList.Add(AppProduct);
            }

            return AppProductsList;
        }
        #endregion
    }
}

using DailyAtHome.DataAccess;
using DailyAtHome.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DailyAtHome.WebAPI.Controllers
{
    [System.Web.Http.RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        private dahDBEntities dahEntity = new dahDBEntities();

        public ProductController()
        {
            dahEntity.Configuration.ProxyCreationEnabled = false;
        }

        #region Public Methods

        [HttpGet]
        [AllowAnonymous]
        [Route("GetProductByID")]
        public List<Products> GetProductByID( int id)
        {
            List<DAH_SP_GetProductDetails_Result> Dalproducts = new List<DAH_SP_GetProductDetails_Result>();
            List<Products> AppProducts = new List<Products>();

            //products = dahEntity.DAH_Products.Where(s => s.SubCategoryID == ID).ToList();
            Dalproducts = dahEntity.DAH_SP_GetProductDetails(id).ToList();
            AppProducts = ConvertToAppProducts(Dalproducts);
            return AppProducts;
        }


        #endregion


        #region Private Methods
        private List<Products> ConvertToAppProducts(List<DAH_SP_GetProductDetails_Result> products)
        {
            List<Products> AppProductsList = new List<Products>();

            foreach (DAH_SP_GetProductDetails_Result DALProduct in products)
            {
                Products AppProduct = new Products();
                
                AppProduct.Product = DALProduct.Product;
                AppProduct.Description = DALProduct.Description;
                AppProduct.IsAvailable = DALProduct.IsAvailable;
                AppProduct.Cost = DALProduct.Cost;
                AppProduct.Image = DALProduct.Image;

                AppProductsList.Add(AppProduct);
            }

            return AppProductsList;
        }
        #endregion
    }
}

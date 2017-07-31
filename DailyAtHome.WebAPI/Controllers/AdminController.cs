using DailyAtHome.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DailyAtHome.DataAccess.Models;

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
                //dahEntity.DAH_SP_AddCategory(Category.Category, Category.Description);
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

        [HttpPost]
        [AllowAnonymous]
        [Route("UpdateSubCategory")]
        public IHttpActionResult UpdateSubCategory(SubCategoriesByCategoryID SubCategory)
        {
            try
            {
                if(SubCategory.ImageID == 0)
                {
                    SubCategory.ImageID = null;
                }
                dahEntity.DAH_SP_UpdateSubCategory(SubCategory.ID, SubCategory.SubCategory, SubCategory.CategoryID, SubCategory.Description, SubCategory.ImageID, SubCategory.SubCategoryImage);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddSubCategory")]
        public IHttpActionResult AddSubCategory(AddSubCategoryModel SubCategory)
        {
            try
            {
                dahEntity.DAH_SP_AddSubCategory(SubCategory.SubCategory, Convert.ToInt32(SubCategory.CategoryID), SubCategory.Description, SubCategory.Image);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}

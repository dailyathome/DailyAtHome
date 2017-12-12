﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DailyAtHome.DataAccess
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class dahDBEntities : DbContext
    {
        public dahDBEntities()
            : base("name=dahDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<DAH_Img_Categories> DAH_Img_Categories { get; set; }
        public virtual DbSet<DAH_Categories> DAH_Categories { get; set; }
        public virtual DbSet<DAH_SubCategories> DAH_SubCategories { get; set; }
        public virtual DbSet<DAH_Products> DAH_Products { get; set; }
        public virtual DbSet<DAH_Address> DAH_Address { get; set; }
        public virtual DbSet<DAH_AddressType> DAH_AddressType { get; set; }
        public virtual DbSet<DAH_Img_SubCategories> DAH_Img_SubCategories { get; set; }
        public virtual DbSet<DAH_Img_Products> DAH_Img_Products { get; set; }
        public virtual DbSet<DAH_Payment> DAH_Payment { get; set; }
        public virtual DbSet<DAH_PaymentType> DAH_PaymentType { get; set; }
    
        public virtual int DAH_SP_AddCategory(string category, string description)
        {
            var categoryParameter = category != null ?
                new ObjectParameter("Category", category) :
                new ObjectParameter("Category", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_AddCategory", categoryParameter, descriptionParameter);
        }
    
        public virtual int DAH_SP_AddSubCategory(string subCategory, Nullable<int> categoryID, string description, string image)
        {
            var subCategoryParameter = subCategory != null ?
                new ObjectParameter("SubCategory", subCategory) :
                new ObjectParameter("SubCategory", typeof(string));
    
            var categoryIDParameter = categoryID.HasValue ?
                new ObjectParameter("CategoryID", categoryID) :
                new ObjectParameter("CategoryID", typeof(int));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var imageParameter = image != null ?
                new ObjectParameter("Image", image) :
                new ObjectParameter("Image", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_AddSubCategory", subCategoryParameter, categoryIDParameter, descriptionParameter, imageParameter);
        }
    
        public virtual int DAH_SP_UpdateCategory(Nullable<int> iD, string category, string description)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            var categoryParameter = category != null ?
                new ObjectParameter("Category", category) :
                new ObjectParameter("Category", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_UpdateCategory", iDParameter, categoryParameter, descriptionParameter);
        }
    
        public virtual int DAH_SP_UpdateSubCategory(Nullable<int> iD, string subCategory, Nullable<int> categoryID, string description, Nullable<int> imageID, string image)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            var subCategoryParameter = subCategory != null ?
                new ObjectParameter("SubCategory", subCategory) :
                new ObjectParameter("SubCategory", typeof(string));
    
            var categoryIDParameter = categoryID.HasValue ?
                new ObjectParameter("CategoryID", categoryID) :
                new ObjectParameter("CategoryID", typeof(int));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var imageIDParameter = imageID.HasValue ?
                new ObjectParameter("ImageID", imageID) :
                new ObjectParameter("ImageID", typeof(int));
    
            var imageParameter = image != null ?
                new ObjectParameter("Image", image) :
                new ObjectParameter("Image", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_UpdateSubCategory", iDParameter, subCategoryParameter, categoryIDParameter, descriptionParameter, imageIDParameter, imageParameter);
        }
    
        public virtual ObjectResult<DAH_SP_GetSubCategoryByCategory_Result> DAH_SP_GetSubCategoryByCategory(Nullable<int> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<DAH_SP_GetSubCategoryByCategory_Result>("DAH_SP_GetSubCategoryByCategory", iDParameter);
        }
    
        public virtual ObjectResult<DAH_SP_GetProductsBySubCategory_Result> DAH_SP_GetProductsBySubCategory(Nullable<int> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<DAH_SP_GetProductsBySubCategory_Result>("DAH_SP_GetProductsBySubCategory", iDParameter);
        }
    
        public virtual int DAH_SP_UpdateProduct(Nullable<int> iD, string pRODUCT, string dESCRIPTION, Nullable<decimal> cOST, Nullable<int> sUBCATEGORYID, Nullable<bool> iSAVAILABLE, Nullable<int> iMAGEID, string iMAGE)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            var pRODUCTParameter = pRODUCT != null ?
                new ObjectParameter("PRODUCT", pRODUCT) :
                new ObjectParameter("PRODUCT", typeof(string));
    
            var dESCRIPTIONParameter = dESCRIPTION != null ?
                new ObjectParameter("DESCRIPTION", dESCRIPTION) :
                new ObjectParameter("DESCRIPTION", typeof(string));
    
            var cOSTParameter = cOST.HasValue ?
                new ObjectParameter("COST", cOST) :
                new ObjectParameter("COST", typeof(decimal));
    
            var sUBCATEGORYIDParameter = sUBCATEGORYID.HasValue ?
                new ObjectParameter("SUBCATEGORYID", sUBCATEGORYID) :
                new ObjectParameter("SUBCATEGORYID", typeof(int));
    
            var iSAVAILABLEParameter = iSAVAILABLE.HasValue ?
                new ObjectParameter("ISAVAILABLE", iSAVAILABLE) :
                new ObjectParameter("ISAVAILABLE", typeof(bool));
    
            var iMAGEIDParameter = iMAGEID.HasValue ?
                new ObjectParameter("IMAGEID", iMAGEID) :
                new ObjectParameter("IMAGEID", typeof(int));
    
            var iMAGEParameter = iMAGE != null ?
                new ObjectParameter("IMAGE", iMAGE) :
                new ObjectParameter("IMAGE", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_UpdateProduct", iDParameter, pRODUCTParameter, dESCRIPTIONParameter, cOSTParameter, sUBCATEGORYIDParameter, iSAVAILABLEParameter, iMAGEIDParameter, iMAGEParameter);
        }
    
        public virtual int DAH_SP_AddProduct(string product, string description, Nullable<int> subCategoryID, string image, Nullable<decimal> cost, Nullable<bool> isAvailable)
        {
            var productParameter = product != null ?
                new ObjectParameter("Product", product) :
                new ObjectParameter("Product", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var subCategoryIDParameter = subCategoryID.HasValue ?
                new ObjectParameter("SubCategoryID", subCategoryID) :
                new ObjectParameter("SubCategoryID", typeof(int));
    
            var imageParameter = image != null ?
                new ObjectParameter("Image", image) :
                new ObjectParameter("Image", typeof(string));
    
            var costParameter = cost.HasValue ?
                new ObjectParameter("Cost", cost) :
                new ObjectParameter("Cost", typeof(decimal));
    
            var isAvailableParameter = isAvailable.HasValue ?
                new ObjectParameter("IsAvailable", isAvailable) :
                new ObjectParameter("IsAvailable", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DAH_SP_AddProduct", productParameter, descriptionParameter, subCategoryIDParameter, imageParameter, costParameter, isAvailableParameter);
        }
    
        public virtual ObjectResult<DAH_SP_GetRandomProducts_Result> DAH_SP_GetRandomProducts()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<DAH_SP_GetRandomProducts_Result>("DAH_SP_GetRandomProducts");
        }
    
        public virtual ObjectResult<DAH_SP_GetFeaturedProducts_Result> DAH_SP_GetFeaturedProducts()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<DAH_SP_GetFeaturedProducts_Result>("DAH_SP_GetFeaturedProducts");
        }
    
        public virtual ObjectResult<DAH_SP_GetProductDetails_Result> DAH_SP_GetProductDetails(Nullable<int> iD)
        {
            var iDParameter = iD.HasValue ?
                new ObjectParameter("ID", iD) :
                new ObjectParameter("ID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<DAH_SP_GetProductDetails_Result>("DAH_SP_GetProductDetails", iDParameter);
        }
    }
}

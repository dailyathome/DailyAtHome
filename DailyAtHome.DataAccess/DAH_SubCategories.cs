//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class DAH_SubCategories
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DAH_SubCategories()
        {
            this.DAH_Products = new HashSet<DAH_Products>();
            this.DAH_Img_SubCategories = new HashSet<DAH_Img_SubCategories>();
        }
    
        public int ID { get; set; }
        public string SubCategory { get; set; }
        public string Description { get; set; }
        public int CategoryID { get; set; }
        public Nullable<int> ImageID { get; set; }
    
        public virtual DAH_Categories DAH_Categories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DAH_Products> DAH_Products { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DAH_Img_SubCategories> DAH_Img_SubCategories { get; set; }
    }
}

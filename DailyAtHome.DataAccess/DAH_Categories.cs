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
    
    public partial class DAH_Categories
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DAH_Categories()
        {
            this.DAH_Img_Categories = new HashSet<DAH_Img_Categories>();
            this.DAH_SubCategories = new HashSet<DAH_SubCategories>();
        }
    
        public int ID { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DAH_Img_Categories> DAH_Img_Categories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DAH_SubCategories> DAH_SubCategories { get; set; }
    }
}

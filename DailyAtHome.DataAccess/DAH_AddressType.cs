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
    
    public partial class DAH_AddressType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DAH_AddressType()
        {
            this.DAH_Address = new HashSet<DAH_Address>();
        }
    
        public int ID { get; set; }
        public string AddressType { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DAH_Address> DAH_Address { get; set; }
    }
}

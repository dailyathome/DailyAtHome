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
    
    public partial class DAH_Address
    {
        public int ID { get; set; }
        public int AddressTypeID { get; set; }
        public string UserID { get; set; }
        public string StreetAddress { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual DAH_AddressType DAH_AddressType { get; set; }
    }
}
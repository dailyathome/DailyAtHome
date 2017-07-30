using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
    public class Address
    {
        public int ID { get; set; }
        public string AddressType { get; set; }
        public string UserID { get; set; }
        public string StreetAddress { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
    }
    public enum AddressType
    {
        Billing = 1,
        Shipping = 2
    }
}

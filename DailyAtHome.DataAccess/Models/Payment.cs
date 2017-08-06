using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
   public class Payment
    {
        public int ID { get; set; }
        public int PatmentID { get; set; }
        public string CardNumber { get; set; }
        public int ExpirationMonth { get; set; }
        public int ExpirationYear { get; set; }
        public int CvcCode { get; set; }
        public string PaymentType { get; set; }
        public string NameOnCard { get; set; }
    }

    public enum PaymentTypes
    {
        DISCOVER=1,
        VISA=2,
        MASTERCARD=3,
        PAYPAL=4
    }
}

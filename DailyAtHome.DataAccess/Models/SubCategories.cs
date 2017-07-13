using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
    public class SubCategories
    {
        public int ID { get; set; }
        public string SubCategory { get; set; }
        public string Description { get; set; }
        public int CategoryID { get; set; }
        public int? ImageID { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
    public class AddSubCategoryModel
    {
        public string SubCategory { get; set; }
        public string CategoryID { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}

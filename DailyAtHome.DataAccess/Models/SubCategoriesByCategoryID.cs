using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
    public class SubCategoriesByCategoryID
    {
        public SubCategoriesByCategoryID()
        {
            this.showEdit = true;
        }

        public int ID { get; set; }
        public int CategoryID { get; set; }
        public string SubCategory { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public bool showEdit { get; set; }
        public string SubCategoryImage { get; set; }
        public int? ImageID { get; set; }
    }
}

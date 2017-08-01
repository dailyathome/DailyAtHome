using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
   public class Products
    {
        public Products()
        {
            this.showEdit = true;
        }
        public int ID { get; set; }
        public string Product { get; set; }
        public string Description { get; set; }
        public decimal Cost { get; set; }
        public int SubCategoryID { get; set; }
        public string SubCategory { get; set; }
        public bool IsAvailable { get; set; }
        public Nullable<int> ImageID { get; set; }
        public string Image { get; set; }
        public bool showEdit { get; set; }

    }
}

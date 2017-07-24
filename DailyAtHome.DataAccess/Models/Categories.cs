using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataAccess.Models
{
    public class Categories
    {
        public Categories()
        {
            this.showEdit = true;
        }
        public int ID { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public bool showEdit { get; set; }
        public List<SubCategories> SubCategoriesList { get; set; }
    }
}

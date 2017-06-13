using DailyAtHome.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DailyAtHome.DataContracts
{
    public interface IAccountDac
    {
        User GetUserDetails(User user);
    }
}

using DailyAtHome.DataContracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DailyAtHome.Models;

namespace DailyAtHome.DataAccess
{
    public class AccountDac : IAccountDac
    {
        public User GetUserDetails(User user)
        {
            return new User() { Email = "test", Role = "Admin" };
        }
    }
}

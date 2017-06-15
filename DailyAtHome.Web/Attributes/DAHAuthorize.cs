using DailyAtHome.DataContracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Net.Http;
using System.Net;
using System.Text;
using DailyAtHome.Models;
using System.Threading;
using System.Security.Principal;
using DailyAtHome.DataAccess;

namespace DailyAtHome.Web.Attributes
{
    public class DAHAuthorize : AuthorizationFilterAttribute
    {
        //IAccountDac _accountDac;
        //public DAHAuthorize(IAccountDac accountDac)
        //{
        //    _accountDac = accountDac;
        //}

        public override void OnAuthorization(HttpActionContext actionContext)
        {
            AccountDac _accountDac = new AccountDac();
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
            else
            {
                string authToken = actionContext.Request.Headers.Authorization.Parameter;
                string[] credentials = Encoding.UTF8.GetString(Convert.FromBase64String(authToken)).Split(':');
                User user = _accountDac.GetUserDetails(new User() { Email = credentials[0], Password = credentials[1] });
                if (user == null)
                {
                    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
                }
                else
                {
                    Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity(credentials[0]), user.Roles.ToArray());
                }
            }
        }
    }
}

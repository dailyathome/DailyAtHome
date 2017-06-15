using DailyAtHome.DataAccess;
using DailyAtHome.DataContracts;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace DailyAtHome.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            container.RegisterType<IAccountDac, AccountDac>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}

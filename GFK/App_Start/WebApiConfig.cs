using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace GFK

{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            //// Web API configuration and services

            //// Use camel case for JSON data.
            //configuration.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            //// Web API routes
            //configuration.MapHttpAttributeRoutes();

            configuration.Routes.MapHttpRoute("API Default", "api/{controller}/{id}",
                new { id = RouteParameter.Optional });
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GFK.Models;
using Newtonsoft.Json;

namespace GFK.Controllers
{
    public class NvoProyectoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromUri] string nuevoproyecto)
        {
            NuevosProyecto np = JsonConvert.DeserializeObject<NuevosProyecto>(nuevoproyecto);
            
            try
            {
                int i;
                using (var dbCtx = new NuevoProyectoModel())
                {
                    dbCtx.NuevosProyectos.Add(np);
                    i = dbCtx.SaveChanges();
                }
                Console.WriteLine(i);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
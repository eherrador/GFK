using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GFK.Models;

namespace GFK.Controllers
{
    public class MetodologiasController : ApiController
    {
        private GFKModel db = new GFKModel();

        // GET api/<controller>
        public IEnumerable<Metodologia> Get()
        {
            return db.Metodologias.ToList();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
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
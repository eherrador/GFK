using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GFK.Models;

namespace GFK.Controllers
{
    public class CategoriasController : ApiController
    {
        private GFKModel db = new GFKModel();

        // GET api/<controller>
        public IEnumerable<Categoria> Get()
        {
            return db.Categorias.ToList();
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
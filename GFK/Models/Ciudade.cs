namespace GFK.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Ciudade
    {
        public int ID { get; set; }

        [Required]
        [StringLength(255)]
        public string NombreCiudad { get; set; }
    }
}

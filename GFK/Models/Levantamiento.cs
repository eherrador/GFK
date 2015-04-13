namespace GFK.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Levantamientos")]
    public partial class Levantamiento
    {
        public int ID { get; set; }

        [Required]
        [StringLength(255)]
        public string NombreLevantamiento { get; set; }
    }
}

namespace GFK.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("NuevosProyectos")]
    public partial class NuevosProyecto
    {
        [Key]
        [StringLength(6)]
        public string IdProyecto { get; set; }

        [Required]
        [StringLength(50)]
        public string NombreProyecto { get; set; }

        public int Categoria { get; set; }

        public int Ciudad { get; set; }

        public int Cliente { get; set; }

        public int Levantamiento { get; set; }

        public int Metodologia { get; set; }

        public int MuestraTotal { get; set; }

        public int EntrevistasPorPunto { get; set; }

        public int numAB { get; set; }

        public int eAB { get; set; }

        public int aAB { get; set; }

        public int numCPlus { get; set; }

        public int eCPlus { get; set; }

        public int aCPlus { get; set; }

        public int numC { get; set; }

        public int eC { get; set; }

        public int aC { get; set; }

        public int numCMinus { get; set; }

        public int eCMinus { get; set; }

        public int aCMinus { get; set; }

        public int numDMinus { get; set; }

        public int eDMinus { get; set; }

        public int aDMinus { get; set; }

        public int numDPlus { get; set; }

        public int eDPlus { get; set; }

        public int aDPlus { get; set; }

        public int numE { get; set; }

        public int eE { get; set; }

        public int aE { get; set; }
    }
}

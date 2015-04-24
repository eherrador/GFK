namespace GFK.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class NuevoProyectoModel : DbContext
    {
        public NuevoProyectoModel()
            : base("name=GFKModelo")
        {
        }

        public virtual DbSet<NuevosProyecto> NuevosProyectos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NuevosProyecto>()
                .Property(e => e.IdProyecto)
                .IsUnicode(false);

            modelBuilder.Entity<NuevosProyecto>()
                .Property(e => e.NombreProyecto)
                .IsUnicode(false);
        }
    }
}

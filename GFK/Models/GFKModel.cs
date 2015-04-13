namespace GFK.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class GFKModel : DbContext
    {
        public GFKModel()
            : base("name=GFKModelo")
        {
        }

        public virtual DbSet<Categoria> Categorias { get; set; }
        public virtual DbSet<Ciudade> Ciudades { get; set; }
        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<Levantamiento> Levantamientos { get; set; }
        public virtual DbSet<Metodologia> Metodologias { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>()
                .Property(e => e.NombreCategoria)
                .IsUnicode(false);

            modelBuilder.Entity<Ciudade>()
                .Property(e => e.NombreCiudad)
                .IsUnicode(false);

            modelBuilder.Entity<Cliente>()
                .Property(e => e.NombreCliente)
                .IsUnicode(false);

            modelBuilder.Entity<Levantamiento>()
                .Property(e => e.NombreLevantamiento)
                .IsUnicode(false);

            modelBuilder.Entity<Metodologia>()
                .Property(e => e.NombreMetodologia)
                .IsUnicode(false);
        }
    }
}

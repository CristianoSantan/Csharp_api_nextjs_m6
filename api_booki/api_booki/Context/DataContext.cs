using api_booki.Models;
using Microsoft.EntityFrameworkCore;

namespace api_booki.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Livros> Livros { get; set; }
        public DbSet<Compras> Compras { get; set; }
    }
}

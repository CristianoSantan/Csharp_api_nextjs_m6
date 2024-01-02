
using booki_api.Models;
using Microsoft.EntityFrameworkCore;

namespace booki_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Usuarios> Usuarios { get; set; }
    }
}

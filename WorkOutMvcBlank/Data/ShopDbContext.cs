using Microsoft.EntityFrameworkCore;
using WorkOutMvcBlank.Models;

namespace WorkOutMvcBlank.Data
{
    public class ShopDbContext : DbContext
    {
        public ShopDbContext(DbContextOptions<ShopDbContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories => Set<Category>();

        public DbSet<Product> Products => Set<Product>();

        public DbSet<ProductOption> ProductOptions => Set<ProductOption>();

        public DbSet<ProductOptionValue> ProductOptionValues => Set<ProductOptionValue>();

    }
}

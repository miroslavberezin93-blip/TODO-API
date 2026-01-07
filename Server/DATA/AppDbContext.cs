using Microsoft.EntityFrameworkCore;
using TaskServer.Models;

namespace TaskServer.DATA
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}
        public DbSet<TaskItem> Tasks => Set<TaskItem>();
        public DbSet<User> Users => Set<User>();
    }
}

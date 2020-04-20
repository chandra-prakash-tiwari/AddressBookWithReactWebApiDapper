//using Microsoft.Data.Sqlite;
//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Diagnostics;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Address_Book_Web_Application
//{
//    //public class Context:DbContext
//    //{
//    //    public DbSet<Models> Contacts { get; set; }

//    //    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//    //    {
//    //        optionsBuilder.UseSqlServer(@"Server=LAPTOP-6QHDMG7F;Database=Contacts;Trusted_Connection=True;");
//    //    }

//    //    protected override void OnModelCreating(ModelBuilder modelBuilder)
//    //    {
//    //    }

//    //    public Context(DbContextOptions options) : base(options)
//    //    {
//    //    }
//    //}

//    IDbConnection GetDbConnection()
//    {
//        return new SqliteConnection(@"Data Source=");
//    }

//    async Task Main()
//    {
//        using(IDbConnection connection= GetDbConnection())
//        {
//            IEnumerable<Models> model = await connection.QueryAsync<Models>("SELECT * FROM MODEL");
//            model.Dump();
//        }
//    }
//}

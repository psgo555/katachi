using Microsoft.EntityFrameworkCore;
using WorkOutMvcBlank.Data;

var builder = WebApplication.CreateBuilder(args);

// 啟用MVC
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ShopDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// 讀取wwwroot內的檔案
app.UseStaticFiles();

// 預設路由設定
app.MapControllerRoute(
    name: "default",
//pattern: "{controller=Shop}/{action=Index}/{id?}");
pattern: "{controller=MuscleMap}/{action=Index}/{id?}");

app.Run();

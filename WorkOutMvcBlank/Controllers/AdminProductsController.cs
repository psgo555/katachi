using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkOutMvcBlank.Data;

namespace WorkOutMvcBlank.Controllers
{
    public class AdminProductsController : Controller
    {
        // 數據庫交互的上下文對象，允許我們查詢和保存數據
        private readonly ShopDbContext _context;

        public AdminProductsController(ShopDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .OrderBy(p => p.Id)
                .ToListAsync();

            return View(products);
        }
    }
}

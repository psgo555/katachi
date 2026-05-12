using Microsoft.AspNetCore.Mvc;

namespace WorkOutMvcBlank.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

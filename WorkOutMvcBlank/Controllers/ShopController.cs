using Microsoft.AspNetCore.Mvc;

namespace WorkOutMvcBlank.Controllers
{
    public class ShopController : Controller
    {
        public IActionResult Index()
        {
            return View("fitness-shop");
        }

        public IActionResult ProductDetail()
        {
            return View("product-detail");
        }

        public IActionResult Checkout()
        {
            return View("checkout");
        }

        public IActionResult Login()
        {
            return View("login");
        }

        public IActionResult Register()
        {
            return View("register");
        }

        public IActionResult OrderComplete()
        {
            return View("order-complete");
        }
    }
}

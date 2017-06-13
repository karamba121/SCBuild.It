using Microsoft.AspNetCore.Mvc;
using View.Models;

namespace View.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View(new Cidade("Konoha"));
    }
}

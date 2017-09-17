using Microsoft.AspNetCore.Mvc;
using SCBuildIt.Domain.Dominio.Entidades;

namespace SCBuildIt.Web.Portal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View(new Cidade("Konoha"));
    }
}

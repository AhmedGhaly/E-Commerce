using E_Commerce.Repository.CartItemrepo;
using E_Commerce.Repository.cartRepo;
using E_Commerce.Repository.CategoryRepo;
using E_Commerce.Repository.FavoriteRepo;
using E_Commerce.Repository.ProductRepo;
using E_Commerce.Repository.UserRepo;
using Microsoft.AspNetCore.Mvc;
using MVC_Project.Models;

namespace E_Commerce.Controllers
{
    public class FavoriteController : Controller
    {
        private readonly IFavoriteItemReposatory ifavrepo;
        private readonly IProductRepository iproductRepo;
        private readonly IUserRepository iuserRepo;

        public ProductController(IProductRepository iproductRepo, IFavoriteItemReposatory ifavrepo,
           IUserRepository IuserRepo)
        {
            // inject DBContext
            this.iproductRepo = iproductRepo;
            this.iuserRepo = IuserRepo;
            this.ifavrepo= ifavrepo;
        }
        
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult addFavorite(int product_id, int user_id)
        {
            Favorite newFav= new Favorite();
            newFav.ProductId = product_id;
            newFav.UserId = user_id;
            ifavrepo.add(newFav);
            return Json(new { success = true });
        }
    }
}

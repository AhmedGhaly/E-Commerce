using MVC_Project.Models;

namespace E_Commerce.Repository.FavoriteRepo
{
    public interface IFavoriteItemReposatory:IGenericRepository<Favorite>
    {
        void add(CartItem entity);
        void delete(global::System.Int32 id);
        List<Favorite> getAll(global::System.String include = "");
        Favorite getById(global::System.Int32 id);
        Favorite getByPrdIdUserId(global::System.Int32 prdId, global::System.Int32 cardId);
        List<Favorite> getCartItemByUserId(global::System.Int32 cartId);
        global::System.Int32 SaveChanges();
        void update(Favorite entity);
    }
}
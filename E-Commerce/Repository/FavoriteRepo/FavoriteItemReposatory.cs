using Microsoft.EntityFrameworkCore;
using MVC_Project.Models;

namespace E_Commerce.Repository.FavoriteRepo
{
    public class FavoriteItemReposatory : IFavoriteItemReposatory
    {
        private readonly ECommerceContext context;
        public FavoriteItemReposatory(ECommerceContext context)
        {
            this.context = context;
        }

        public void add(Favorite entity)
        {
            context.Favorite.Add(entity);

        }

        public void delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Favorite> getAll(string include = "")
        {
            var query = context.Favorite.AsQueryable();
            if (!String.IsNullOrEmpty(include))
            {
                var includes = include.Split(",");
                foreach (var inc in includes)
                {
                    query = query.Include(inc.Trim());
                }
            }
            return query.ToList();
        }

        public Favorite getById(int id)
        {
            var favorite = context.Favorite.FirstOrDefault(p => p.ProductId == id);
            if (favorite != null)
                return favorite;

            return null;
        }
        public Favorite getByPrdIdUserId(int prdId, int cardId)
        {
            var favorite = context.Favorite.FirstOrDefault(p => p.ProductId == prdId && p.CartId == cardId);
            if (favorite != null)
                return favorite;

            return null;
        }
        public void update(Favorite entity)
        {
            context.Favorite.Update(entity);

        }
        public int SaveChanges()
        {
            return context.SaveChanges();
        }

        public List<Favorite> getCartItemByUserId(int cartId)
        {
            return context.Favorite.Where(c => c.CartId == cartId).ToList();
        }
    }
}

    

﻿using Microsoft.EntityFrameworkCore;
using MVC_Project.Models;

namespace E_Commerce.Repository.CartItemrepo
{
    public class CartItemRepository : ICartItemRepository
    {

        private readonly ECommerceContext context;
        public CartItemRepository(ECommerceContext context)
        {
            this.context = context;
        }

        public void add(CartItem entity)
        {
            context.CartItem.Add(entity);
             
        }

        public void deleteCart(int product_id)
        {
            context.CartItem.Remove(context.CartItem.Where(c => c.ProductId == product_id).FirstOrDefault());
        }

        public List<CartItem> getAll(string include = "")
        {
            var query = context.CartItem.AsQueryable();
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

        public CartItem getById(int id)
        {
            var cart = context.CartItem.FirstOrDefault(p => p.ProductId == id);
            if (cart != null)
                return cart;

            return null;
        }
        public CartItem getByPrdIdUserId(int prdId,int cardId)
        {
            var cart = context.CartItem.FirstOrDefault(p => p.ProductId == prdId && p.CartId == cardId);
            if (cart != null)
                return cart;

            return null;
        }
        public void update(CartItem entity)
        {
            context.CartItem.Update(entity);
         
        }
        public int SaveChanges()
        {
            return context.SaveChanges();
        }

        public List<CartItem> getCartItemByCardId(int cartId)
        {
            return context.CartItem.Where(c => c.CartId == cartId).ToList();
        }

        public void delete(int id)
        {
            CartItem cartItem = getById(id);
            context.CartItem.Remove(cartItem);
        }

        public int getCounter(int cart_id)
        {
            return context.CartItem.Where(t => t.CartId == cart_id).Count();
        }

        public decimal getTotalPrice(int cart_id)
        {
            decimal total = 0;
            var cartItems = context.CartItem.Where(t => t.CartId == cart_id).ToList();
            foreach(var cartItem in cartItems)
            {
                total += cartItem.Price;
            }

            return total;
        }

        public void changeAmount(int cartId, int amount)
        {
            CartItem cartItem = context.CartItem.Where(c => c.CartId == cartId).FirstOrDefault();
            cartItem.Quantity = amount;
            context.CartItem.Update(cartItem);
            context.SaveChanges();
        }
    }
}

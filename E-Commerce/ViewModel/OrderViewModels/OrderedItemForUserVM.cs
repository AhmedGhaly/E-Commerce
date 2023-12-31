﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Commerce.ViewModel.OrderViewModels
{
    public class OrderedItemForUserVM
    {
        public int id { get; set; }
        public decimal  price { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        public string Brand { get; set; }
        public int cart_id { get; set; }

        public string image { get; set; }
        public int Quantity { get; set; }
        public int amountStock { get; set; }
    }
}
